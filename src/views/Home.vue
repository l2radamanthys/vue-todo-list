<template>
  <div class="mw8 center pa3">
    <div class="f3 gray">
      Listado de Tareas
    </div>
    <listado-tareas/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListadoTareas from '@/components/ListadoTareas.vue'


export default {
  name: 'Home',
  components: {
    // HolaMundo,
    ListadoTareas,
  }
}
</script>
