<template lang="pug">
  main
    dt-header

    .container
      h1 Dev Talks BR 🇧🇷

    dt-footer
</template>

<script>
import DtHeader from '~/components/Header'
import DtFooter from '~/components/Footer'

export default {
  name: 'home',

  components: { DtHeader, DtFooter }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
  }
</style>
