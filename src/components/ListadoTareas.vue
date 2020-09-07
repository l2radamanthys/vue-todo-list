<template>
  <div class="mt3">
    <item-tarea v-for="tarea in tareas" :key="tarea.id" v-bind:tarea="tarea" @quitarTarea="quitarTarea" @guardar="guardarTareas" />
    <div v-if="tareas.length === 0" class="f7 gray">
      No cargo ninguna tarea.
    </div>
    <div class="mt3">
      <agregar-tarea @agregarTarea="agregarTarea" />
    </div>
  </div>
</template>

<script>
import ItemTarea from './ItemTarea.vue'
import AgregarTarea from './AgregarTarea.vue'
import Vue from "vue";
import UUID from "vue-uuid";

Vue.use(UUID);


export default {
  name: "ListadoTareas",
  components: {
    ItemTarea,
    AgregarTarea
  },
  data() {
    let tareas = [];
    if (localStorage.tareasTodo !== undefined && localStorage.tareasTodo !== null) {
      tareas = JSON.parse(localStorage.tareasTodo);
    }
    return {
      tareas: tareas,
    }
  },
  methods: {
    agregarTarea(nombre) {
      this.tareas.push({
        id: this.$uuid.v1(),
        nombre: nombre,
        completada: false,
      });
      this.guardarTareas();
    },

    guardarTareas() {
      localStorage.tareasTodo = JSON.stringify(this.tareas);
    },

    quitarTarea(tareaId) {
      const idx = this.tareas.findIndex(t => t.id === tareaId);
      this.tareas.splice(idx, 1);
      this.guardarTareas();
    },
  },
}
</script>
