<template lang="pug">
  dt-podcast
    h2(slot="title") Mas, então você ainda programa em PHP?
    h4(slot="date") 31/10/2018
    p(slot="description") Davi, Marcos, José e Gabriel discutem sobre o passado, presente e futuro do PHP. Do motivo de chacota a  mudanças na linguagem e o que o mercado espera para o futuro.
    iframe(slot="audio", src="https://archive.org/embed/MasVoceAindaProgtamaPHP", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
