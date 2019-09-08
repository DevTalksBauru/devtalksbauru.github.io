<template lang="pug">
  dt-post
    h2(slot="title") Construindo Microsserviços a partir de um Monolito
    h4(slot="date") 29/08/19
    p(slot="description") O que é Monolito? O que é Microsserviço? Quais as vantagens e desvantagens de cada um?
    script.speakerdeck-embed(async='', slot="slides", data-id='c840dd778a9249a88f67bb66409b886c', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/omarkdev/", target="_blank") @omarkdev
    a(slot="link", href="https://photos.app.goo.gl/MxewpNHGaTqQLJkF7", target="_blank") Fotos
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
