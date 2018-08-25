<template lang="pug">
  dt-post
    h2(slot="title") Back-end & Front-end em Harmonia com Atomic Design
    h4(slot="date") 06/07/17 
    p(slot="description") 
    a(slot="slides", href="#", target="_blank") Slides
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
