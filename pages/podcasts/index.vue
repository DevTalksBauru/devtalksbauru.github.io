<template lang="pug">
  .container
    h1 Podcasts
    ul
      li
        router-link(to="/podcasts/01") Podcast 01
        router-link(to="/podcasts/02") Podcast 02
</template>

<script>

export default {
  name: 'podcasts'
}
</script>
