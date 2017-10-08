<template lang="pug">
  main.main
    dt-header
    nuxt
</template>

<script>
import DtHeader from '~/components/Header'
import DtFooter from '~/components/Footer'

export default {
  components: { DtHeader, DtFooter }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Anton|Open+Sans+Condensed:300');

  * {
    box-sizing: content-box;
  }

  html,
  body {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Anton', sans-serif;
    margin: 0;
  }

  .header {
    position: fixed;
    height: 100%;
    width: auto;
    z-index: 1;

    &:hover {
      width: 100%;
    }
  }

  .main {
    height: 100%;
    width: 100%;
  }

</style>
