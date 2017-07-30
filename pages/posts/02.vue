<template lang="pug">
  dt-post
    h1(slot="title") Post Title 2

    //- div(slot="description") New Content

    a(slot="presentationLink", href="#") Link
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'podcast-item',

  components: { DtPost }
}
</script>

<style scoped lang="scss">
 h1 {
 color: red }

</style>
