<template lang="pug">
  dt-podcast
    h1(slot="title") Organizando um Hackathon
    h4(slot="date") 04/04/2018
    p(slot="description") Em Janeiro de 2018 o Devtalks organizou o primeiro Hackathon de Bauru e nesta conversa, nós contamos os perrengues e as vitórias para fazer um evento de sucesso! Como foram os passos antes, durante e depois da organização; A correria para deixar a alimentação sempre pronta e o sinal de rede! Aaah, o sinal de rede...
    iframe(slot="audio", src="https://archive.org/embed/DT-2-Oranizando_Um_Hackathon")
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
