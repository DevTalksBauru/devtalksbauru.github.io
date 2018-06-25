<template lang="pug">
  dt-podcast
    h2(slot="title") Estágio
    h4(slot="date") 23/06/2018
    p(slot="description") Neste episódio discutimos sobre este momento mágico da vida: O Estágio!  Falamos das nossas experiências, o papel do mentor na formação, vagas incríveis que aparecem no Linkedin e de quebra, algumas dicas!
    iframe(slot="audio", src="https://archive.org/embed/DT4EstagioEditando", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
