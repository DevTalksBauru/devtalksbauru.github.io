<template lang="pug">
  .page
    article.article
      aside.sidebar.sidebar--one
      section.section.section--one
        slot(name="title")
          h1 Podcast Title

        slot(name="description")
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        slot(name="participants")
          p 👨👩 Participants

        audio(:src="audio", controls)
</template>

<script>
export default {
  name: 'header',

  props: {
    audio: {
      type: String,
      default: 'https://archive.org/embed/DT-1-Entrevista_Com_RH'
    }
  }
}
</script>

<style scoped>
  .container {
    width: 50%;
  }
</style>
