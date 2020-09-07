<template>
  <div class="pa3 bb b--gray pointer flex">
    <div>
      <input type="checkbox" v-model="tarea.completada">
    </div>
    <div class="pl3 flex1" :class="{ 'gray strike': tarea.completada }" @click="toogleTarea()">
      <div v-show="!editar">
        {{ tarea.nombre }}
      </div>
      <div v-show="editar" class="pr3 remove-outline">
        <input
          type="text"
          ref="nombreTarea"
          placeholder="nueva tarea..."
          v-model="tarea.nombre"
          @keyup.enter="submit"
          class="w-100 bn blue" >
      </div>
    </div>
    <div class="gray" @click="modificarNombre()">
      <i class="fas fa-pencil-alt"></i>
    </div>
    <div class="gray ml2" @click="quitarTarea()">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemTarea",

  data() {
    return {
      editar: false,
    }
  },

  props: {
    tarea: {
      nombre: { type: String, default: "Sin nombre" },
      completada: { type: Boolean, default: false },
    }
  },

  methods: {
    toogleTarea() {
      if (!this.editar) {
        this.tarea.completada = !this.tarea.completada;
      }
    },

    quitarTarea() {
      this.$emit("quitarTarea", this.tarea.id);
    },

    modificarNombre() {
      this.editar = true;
      let this_ = this;
      setTimeout(() => {
        this_.$refs.nombreTarea.focus();
      }, 100);
    },

    submit() {
      this.editar = false;
      this.$emit("guardar");
    }
  }
}
</script>
