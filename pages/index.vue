<template lang="pug">
  .page
    article.article.article--one
      aside.sidebar.sidebar--one
      section.section.section--one
        h1.section__title
          span.section__block We
          span.section__block Are
          span.section__block DevTalks
    article.article.article--two
      aside.sidebar.sidebar--two
      section.section.section--two
        h2.section__title.section__title--two
          span.section__block About
          span.section__block Us
        p.section__text We are a small group of developers moving the community with talks and events.

    article.article.article--three
      aside.sidebar.sidebar--three
      section.section.section--three
        h2.section__title.section__title--three
         span.section__block Wanna
         span.section__block Talk?
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
  .page {
    height: 100%;
    width: 100%;
  }

  .article {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: .5fr 2fr;
    grid-template-rows: 100% 100%;
    height: 100%;
    overflow: hidden;
    padding: 0 30px 0 0;
    position: relative;
    width: calc(100% - 30px);

    &::before {
      content: '';
      height: 100%;
      position: absolute;
      width: 100%;
    }

    &--one {
      background-image: url(~assets/home-01.jpg);
      background-position: 0 center;

      &::before {
        background-color: rgba(#96281B, .9);
        mix-blend-mode: multiply;
      }
    }

    &--two {

      &::before {
        background-color: rgba(white, .6);
        mix-blend-mode: hue;
      }
    }

    &--three {
      background-image: url(~assets/home-02.jpg);
      background-position: 0 bottom;

      &::before {
        background-color: rgba(34, 49, 63, 0.75);
        mix-blend-mode: normal;
      }
    }
  }

  .sidebar {
    background: rgba(#000, .75);
    height: 100%;

    &--two {
      background-color: transparent;
    }
  }

  .section {
    height: 100%;

    &--one {
      background-color: rgba(white, .5);
      mix-blend-mode: overlay;
    }

    &--two {
      background-color: rgba(#ddd, .5);
    }

    &--three {
      background-color: rgba(34, 49, 63, 0.5);
      mix-blend-mode: overlay;
    }

    &__title {
      mix-blend-mode: darken;
      bottom: 0;
      font-size: 500%;
      font-size: 12vw;
      position: absolute;
      right: 5px;
      text-align: right;
      text-transform: uppercase;

      &--two {
        color: #34495E;
        bottom: auto;
        left: 20%;
        right: auto;
        text-align: left;
        top: 0;
      }

      &--three {
        color: white;
        mix-blend-mode: hard-light;
      }
    }

    &__block {
      display: block;
    }

    &__text {
      bottom: 0;
      position: absolute;
      right: 15px;
      text-align: right;
      width: 50%;
    }
  }

</style>
