<template lang="pug">
  dt-post
    h2(slot="title") Como Garantir a Qualidade da sua Aplicação
    h4(slot="date") 13/08/2018
    p(slot="description") Qual a importância em uma aplicação? Quais as principais preocupações? Como otimizar o processo com ferramentas como CircleCI, Codecov e outras.
    script.speakerdeck-embed(async='', slot="slides", data-id='0d0e410da1674923b02323de0703bfe0', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/chrfreitas", target="_blank") @chrfreitas
    a(slot="link", href="https://photos.app.goo.gl/DADH6Kgh1amdrjhn7", target="_blank") Fotos
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
