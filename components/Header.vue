<template lang="pug">
  header.container
    nav
      router-link(to="/") Home
      router-link(to="/podcasts") Podcasts
      router-link(to="/hackaton") Hackaton
      router-link(to="/posts") Posts
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  a {
    margin-left: 10px;
    text-decoration: none;
  }

  .nuxt-link-exact-active, .nuxt-link-active {
    background-color: #3d3d3d;
    color: #fff;
  }
</style>
