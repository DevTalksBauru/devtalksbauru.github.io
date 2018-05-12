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
    font-weight: normal;
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  iframe {
    border: 0;
  }

  #__nuxt, #__layout, .main {
    height: 100%;
    width: 100%;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  .is-hidden {
    display: none !important;
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

      @media (max-width: 686px), screen and (min-device-pixel-ratio: 2) {
        background-attachment: unset;
      }

      @media (max-width: 989px), screen and (min-device-pixel-ratio: 2)  {
        background-size: auto 100%;
      }

      &::before {
        content: '';
        height: 100%;
        position: absolute;
        width: 100%;
      }

      &--podcasts {
        background-position: center;
        height: auto;
        overflow: auto;
      }

      &--podcasts::before {
        background-image: url(~assets/podcasts-bg.jpg);
        content: '';
        position: fixed;
        height: 100%;
        width: 100%;
      }
    }

    &__sidebar {

      &--home {
        height: 100%;
      }

      &--podcasts::before {
        background: rgba(3, 22, 57, 0.6);
        content: '';
        height: 100%;
        position: fixed;
        width: 20%;
      }
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

      &--podcasts {
        mix-blend-mode: hard-light;
        padding: 0;
      }
    }

    &__list {
     align-items: stretch;
     background: #DBD3E9;
     display: flex;
     flex-wrap: wrap;
     padding: 40px 20px 20px;

     &--tiles {
        padding: 20px 0 0 20px;
     }

     &--bars {
        flex-direction: column-reverse;
     }
    }

    &__list-item {
      box-sizing: border-box;
      margin: 0 0 20px;
      width: 100%;

      a {
        color: black;
        display: block;
        min-height: 100px;
        padding: 0;
        text-decoration: none;

        &:hover {
          color: #375790;
        }

        strong {
          font-weight: bold;
        }

        span {
          font-size: 20px;
        }
      }
    }

    &__post {
      align-items: center;
      background: #DBD3E9;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin: 20px 0 0;
      padding: 50px 20px 100px;
      width: 100%;
    }
  }

  .post {

    * {
      text-align: center;
    }

    h2 {
      font-size: 4rem;
      text-transform: uppercase;

      @media (max-width: 686px), screen and (min-device-pixel-ratio: 2) {
        font-size: 2.5rem;
      }
    }

    h4 {
      font-size: 1.5rem;
    }

    p {
      margin-top: 0;

      @media (max-width: 686px), screen and (min-device-pixel-ratio: 2) {
        font-size: 1.5rem;
      }
    }

    &__link {
      align-items: center;
      border: 2px solid #DBD3E9;
      border-radius: 100%;
      display: flex;
      height: 48px;
      justify-content: center;
      margin: 40px 0 0 20px;
      width: 48px;

      &:hover {
        background: #DBD3E9;

        * {
          fill: black;
        }
      }
    }

    &__divider {
      border: 1px solid black;
      margin: 30px auto;
      width: 100px;
    }

    &__player {
      background: black;
      padding: 15px;
      border-radius: 50px;
      min-width: 90%;
    }
  }

</style>
