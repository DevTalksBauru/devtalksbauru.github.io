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

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  #__nuxt, #__layout, .main {
    height: 100%;
    width: 100%;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  .page {
    height: 100%;
    width: 100%;

    &__section {
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      display: grid;
      grid-template-columns: .5fr 2fr;
      grid-template-rows: 100% 100%;
      height: 100%;
      overflow: hidden;
      padding: 0;
      position: relative;
      width: 100%;
    }

    &__sidebar {
      background: rgba(#000, .75);
      height: 100%;
    }

    &__content {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      padding: 0 30px;

      @media (max-width: 686px) {
        padding: 0 15px;
      }
    }

    &__list-item {
      background: white;
      box-sizing: border-box;
      height: 25vh;
      margin: 0 0 20px;
      width: 100%;
    }
  }

</style>
