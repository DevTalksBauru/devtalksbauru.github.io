<template lang="pug">
  .container
    h1 Post {{ title }}
</template>

<script>

export default {
  name: 'post-item',

  data () {
    return {
      title: 'Post 1'
    }
  }
}
</script>
