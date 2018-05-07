<template lang="pug">
  dt-podcast
    h1(slot="title") Devs & Q.A's
</template>

<script>
import DtPodcast from '~/components/Podcast'

export default {
  name: 'podcast-item',

  components: { DtPodcast }
}
</script>
