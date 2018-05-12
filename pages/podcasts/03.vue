<template lang="pug">
  dt-podcast
    h2(slot="title") Devs & Q.A's
    h4(slot="date") 04/04/2018
    p(slot="description") Neste episódio temos desenvolvedores e QA's reunidos para discutir a participação e a importância de testes em aplicações. Qual o panorama atual e onde pretende-se chegar com a profissão!
    iframe(slot="audio", src="https://archive.org/embed/DT-3-Devs_E_QAs", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
