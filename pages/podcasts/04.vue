<template lang="pug">
  dt-podcast
    h2(slot="title") Estágio
    h4(slot="date") 23/06/2018
    p(slot="description") Neste episódio, vamos discutir um pouo sobre ser estagiário. Falando de nossas experiências, o papel do mentor, vagas e dicas!
    iframe(slot="audio", src="https://archive.org/embed/DT4EstagioEditando", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
