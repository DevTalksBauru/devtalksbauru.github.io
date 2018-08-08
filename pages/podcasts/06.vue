<template lang="pug">
  dt-podcast
    h2(slot="title") Legado e Refatoração
    h4(slot="date") 06/08/2018
    p(slot="description") O que é um projeto legado, na sua opinião? Como nós procedemos na refatoração? Os projetos legados estão aí no nosso dia-a-dia e precisamos lidar com eles. Neste episódio nós vamos abordar o que entendemos como legado e como abordamos a refatoração. Se tiver alguma consideração a fazer manda um e-mail para gente: 
      a(href="mailto:devtalksbauru@gmail.com") devtalksbauru@gmail.com
    iframe(slot="audio", src="https://archive.org/embed/6LegadoERefatorao", width="100%", height="30")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
