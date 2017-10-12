<template lang="pug">
  .page
    article.article
      aside.sidebar.sidebar--one
      section.section.section--one
        slot(name="title")
          h1 Post Title

        slot(name="description")
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        ul
          li
            span 🔗
            slot(name="presentationLink")
              span Presentation Link
          slot(name="date")
            li 📅 Date
          slot(name="time")
            li 🕐 Time
          slot(name="speakerName")
            li 🗣 Speaker Name
          slot(name="speakerBio")
            li ⚽️ Speaker Bio
          slot(name="location")
            li 🗺 Location
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  .container {
    width: 50%;
  }
</style>
