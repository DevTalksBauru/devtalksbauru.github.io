<template lang="pug">
  dt-post
    h2(slot="title") Back-end & Front-end em Harmonia com Atomic Design
    h4(slot="date") 06/07/17
    p(slot="description") Como manter os componentes organizados e atualizados com fácil acesso para todo o time?
    script.speakerdeck-embed(async='', slot="slides", data-id='6478dd52e31e41c2b3988c7eeba15114', data-ratio='1.33333333333333', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/matheusagcosta/", target="_blank") @matheusagcosta
    a(slot="link", href="https://photos.app.goo.gl/CxCMl6lNPlAZ6HzX2", target="_blank") Fotos
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
