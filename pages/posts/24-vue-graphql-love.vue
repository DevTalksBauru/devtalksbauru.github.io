<template lang="pug">
  dt-post
    h2(slot="title") Vue + GraphQL = ♥
    h4(slot="date") 26/01/2019
    p(slot="description") Aprenda como utilizar o GraphQL em uma aplicação Vue.js; Suas facilidades em comparação ao REST e como é uma integração em uma aplicação moderna.
    script.speakerdeck-embed(async='', slot="slides", data-id='', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/kavalcante/", target="_blank") @kavalcante
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
