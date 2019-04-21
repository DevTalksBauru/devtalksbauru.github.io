<template lang="pug">
  dt-post
    h2(slot="title") PHP 7: Not For Kids
    h4(slot="date") 10/05/18
    p(slot="description") Não é mais novidade que o PHP 7 veio com muitas melhorias, sejam internas, de performance ou sintaxe, mas quais melhorias foram essas? Essa palestra irá abordar isso e também quais foram as mudanças do PHP 7.0 para o 7.1 e o que está por vir na versão 7.2
    script.speakerdeck-embed(async='', slot="slides", data-id='17ce93f2b89f433a99e93bdc99567d82', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/omarkdev/", target="_blank") @omarkdev
    a(slot="link", href="https://photos.app.goo.gl/AIp1hlx7xMfSB52q2", target="_blank") Fotos
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
