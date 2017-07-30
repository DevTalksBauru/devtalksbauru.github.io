<template lang="pug">
  .container
    h1 Podcast {{ title }}
</template>

<script>

export default {
  name: 'podcast-item',

  data () {
    return {
      title: 'Podcast 1'
    }
  }
}
</script>
