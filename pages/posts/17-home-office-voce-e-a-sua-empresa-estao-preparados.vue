<template lang="pug">
  dt-post
    h2(slot="title") Home Office: Você e a sua empresa estão preparados?
    h4(slot="date") 22/03/18
    p(slot="description") Gabriel e Matheus vão compartilhar um pouco das suas rotinas e dar várias dicas para quem quer ser um dev remoto ou como sua empresa pode aderir a essa cultura.
    script.speakerdeck-embed(async='', slot="slides", data-id='6cf73b7518484d49be94fb9444d3c3f8', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/matheusagcosta/", target="_blank") @matheusagcosta
    a(slot="link", href="https://twitter.com/g_scavassa/", target="_blank") @g_scavassa
    a(slot="link", href="https://photos.app.goo.gl/o55gYtlIvmpZHNkv1", target="_blank") Fotos
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
