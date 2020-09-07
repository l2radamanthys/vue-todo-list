<template>
  <div>
    <div v-show="!visible" class="blue pointer" @click="mostrarFormulario()">
      + Agregar Tareas
    </div>
    <div v-show="visible">
      <input
        type="text"
        ref="nombreTarea"
        placeholder="nueva tarea..."
        v-model="nombre"
        @keyup.enter="submit"
        class="w-100 pv2 ph3 bn" >
    </div>
  </div>
</template>

<script>
export default {
  name: "AgregarTarea",
  data() {
    return {
      visible: false,
      nombre: null,
    }
  },
  methods: {
    mostrarFormulario() {
      this.visible = true;
      console.log(this.$refs.nombreTarea)
      let this_ = this;
      setTimeout(function() {
        this_.$refs.nombreTarea.focus();
      }, 100);

    },

    submit() {
      this.$emit("agregarTarea", this.nombre);
      this.nombre = null;
      this.visible = false;
    },
  }
}
</script>

