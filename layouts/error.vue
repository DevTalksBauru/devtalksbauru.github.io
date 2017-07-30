<template lang="pug">
  main
    .container
      h1 Error
      pre
        code {{ error }}
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss">
  html {
    font-family: courier;
  }

  ul {
    flex-direction: column;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
