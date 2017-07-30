<template lang="pug">
  dt-post
    h1(slot="title") Post Title 1
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'podcast-item',

  components: { DtPost }
}
</script>
