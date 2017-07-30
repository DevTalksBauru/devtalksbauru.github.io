<template lang="pug">
  .container
    h1 Posts
    ul
      li
        router-link(to="/posts/01") Post 01
        router-link(to="/posts/02") Post 02
</template>

<script>

export default {
  name: 'podcasts'
}
</script>
