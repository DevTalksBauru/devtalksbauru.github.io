<template lang="pug">
  dt-post
    h2(slot="title") Construindo API em GraphQL
    h4(slot="date") 26/01/2019
    p(slot="description") Ja ouviu falar em GraphQL? Entenderemos o que é, todas as suas características e como construir uma API com essa incrível tecnologia.
    script.speakerdeck-embed(async='', slot="slides", data-id='', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/leoturbiani/", target="_blank") @leoturbiani
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
