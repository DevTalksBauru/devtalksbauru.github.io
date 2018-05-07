<template lang="pug">
  .page
    section.page__section.home__section.podcasts__section
      aside.podcasts__sidebar
      article.podcasts__content
        dt-podcast
          h1(slot="title") Entrevista com RH
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
