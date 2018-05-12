<template lang="pug">
  .page
    section.page__section.page__section--podcasts
      aside.page__sidebar.page__sidebar--podcasts
      article.page__content.page__content--podcasts
        slot(name="title")
          h1 Podcast Title

        slot(name="date")
          h4 Date

        slot(name="description")
          p Description

        slot(name="audio")
          iframe(:src="src")
</template>

<script>
export default {
  name: 'header',

  props: {
    iframe: {
      type: String,
      src: 'src'
    }
  }
}
</script>
