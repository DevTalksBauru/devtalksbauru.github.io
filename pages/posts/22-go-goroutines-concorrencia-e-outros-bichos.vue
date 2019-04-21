<template lang="pug">
  dt-post
    h2(slot="title") Go, Goroutines, Concorrência e Outros Bichos
    h4(slot="date") 13/09/2018
    p(slot="description") Talk do José Paulo Neto
    script.speakerdeck-embed(async='', slot="slides", data-id='b93c4b1c5ad64d60ab7a1e5a3d2ed7c0', data-ratio='1.33333333333333', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/j_zes", target="_blank") @j_zes
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
