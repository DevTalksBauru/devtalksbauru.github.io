<template lang="pug">
  dt-post
    h2(slot="title") Robôs para Mercado Financeiro com MQL
    h4(slot="date") 27/03/2019
    p(slot="description") Essa é uma talk introdutória ao mercado de ações, como operar e desenvolver um robô com metatrader.
    script.speakerdeck-embed(async='', slot="slides", data-id='cd983eafe4f24de4a1936eb88e969fc4', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://twitter.com/zexias/", target="_blank") @zexias
    a(slot="link", href="https://twitter.com/davivolpato/", target="_blank") @davivolpato
    a(slot="link", href="https://photos.app.goo.gl/uMoTBjNA6nsL7bHJ6", target="_blank") Fotos
    a(slot="link", href="https://bitbucket.org/davivolpato/devtalksbetina/src/master/", target="_blank") Repo
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
