<template lang="pug">
  dt-post
    h2(slot="title") A Verdade sobre Frameworks
    h4(slot="date") 09/04/18
    p(slot="description") O Surgimento dos Frameworks no mundo de desenvolvimento causaram grandes revoluções, mas vocês está usando estas revoluções em seu favor?
    script.speakerdeck-embed(async='', slot="slides", data-id='8fb2c6ea98164ffbb6add4d65bd392a7', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://instagram.com/helisson_camargo/", target="_blank") @helisson_camargo
    a(slot="link", href="https://photos.app.goo.gl/GZveffDm91nLIDCw2", target="_blank") Fotos
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
