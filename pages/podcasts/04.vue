<template lang="pug">
  dt-podcast
    h2(slot="title") Estágio
    h4(slot="date") 23/06/2018
    p(slot="description") Discussão sobre ser estagiário.
    iframe(slot="audio", src="https://archive.org/embed/DT4EstagioEditando", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
