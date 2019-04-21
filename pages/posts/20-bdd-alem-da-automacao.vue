<template lang="pug">
  dt-post
    h2(slot="title") BDD - Além da Automação
    h4(slot="date") 08/06/2018
    p(slot="description") Há muita confusão no que é Behaviour Data Development. Nessa palestra vamos discutir o que realmente é BDD e como ele é usado.
    script.speakerdeck-embed(async='', slot="slides", data-id='3b55bfb9eb97499c848bbfd238573be6', data-ratio='1.77777777777778', src='//speakerdeck.com/assets/embed.js')
    a(slot="link", href="https://github.com/lkrust", target="_blank") @lkrust
    a(slot="link", href="https://photos.app.goo.gl/FhqoBQanGfZbx1pV9", target="_blank") Fotos
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
