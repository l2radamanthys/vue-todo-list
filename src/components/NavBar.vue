
<template>
  <nav class="flex pa3 bb b--light-gray">
    <div class="flex1 fw7 dark-gray">
      ToDo List
    </div>
    <div>
     <router-link class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/">Home</router-link>
      <router-link class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

