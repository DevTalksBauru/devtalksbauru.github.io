<template lang="pug">
  dt-podcast
    h1(slot="title") Podcast Title 2
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
