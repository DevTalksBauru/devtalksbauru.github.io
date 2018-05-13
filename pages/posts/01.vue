<template lang="pug">
  dt-post
    h2(slot="title") 1
    h4(slot="date")
    p(slot="description")
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'podcast-item',

  components: { DtPost }
}
</script>
