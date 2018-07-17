<template lang="pug">
  dt-podcast
    h2(slot="title") Eu Fico F#D!D0 Quando...
    h4(slot="date") 17/07/2018
    p(slot="description") Neste episódio falamos sobre aquelas situações do trabalho que nos deixam fudido! Compartilhe conosco o que te irrita durante o trabalho : devtalksbauru@gmail.com
    iframe(slot="audio", src="https://archive.org/embed/DTPodcast5EuFicoFudidoQuando", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
