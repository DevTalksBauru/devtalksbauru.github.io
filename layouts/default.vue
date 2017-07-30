<template lang="pug">
  main
    dt-header
    .container
      nuxt
    dt-footer
</template>

<script>
import DtHeader from '~/components/Header'
import DtFooter from '~/components/Footer'

export default {
  components: { DtHeader, DtFooter }
}
</script>

<style lang="scss">
  html {
    font-family: courier;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
