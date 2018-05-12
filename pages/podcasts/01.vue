<template lang="pug">
  dt-podcast
    h1(slot="title") Entrevista com RH
    h4(slot="date") 11/03/2018
    p(slot="description") No nosso primeiro podcast, falamos sobre as situações inusitadas que passamos.Seja ela para trabalho no Brasil ou no exterior, sempre fica aquele causo!
    iframe(slot="audio", src="https://archive.org/embed/DT-1-Entrevista_Com_RH", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
