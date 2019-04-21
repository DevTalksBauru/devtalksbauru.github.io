<template lang="pug">
  dt-post
    h2(slot="title") Introdução ao universo React Native
    h4(slot="date") 30/10/2018
    p(slot="description") Nessa talk vamos demonstrar o poder e a facilidade do RN.
    script.speakerdeck-embed(async='', slot="slides", data-id='72d876879c484c76a8a8be5a392e1602', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://github.com/wendelfreitas", target="_blank") @wendelfreitas
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
