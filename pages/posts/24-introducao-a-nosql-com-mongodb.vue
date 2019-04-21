<template lang="pug">
  dt-post
    h2(slot="title") Introdução a NoSQL com MongoDB
    h4(slot="date") 26/01/2019
    p(slot="description") Essa talk é uma introdução a banco de dados não relacionais, suas principais diferenças em relação aos tradicionais e uma breve demo do mongoDB
    script.speakerdeck-embed(async='', slot="slides", data-id='', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/helendias.hd/", target="_blank") @helendias.hd
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
