<template lang="pug">
  dt-podcast
    h2(slot="title") Tecnologias De Startups
    h4(slot="date") 20/09/2018
    p(slot="description") Como e quando decidir qual tecnologia usar? Quem é meu público? Essas e outras respostas você descobre nesse episódio.
    iframe(slot="audio", src="https://archive.org/embed/7TecnologiasDeStartups", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
