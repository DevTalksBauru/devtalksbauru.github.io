<template lang="pug">
  .page.home
    section.home__section.home__section--one
      aside.home__sidebar.home__sidebar--one
      article.home__content.home__content--one
        h1.home__title.home__title--one
          span We
          span Are
          span DevTalks
    section.home__section.home__section--two
      aside.home__sidebar.home__sidebar--two
      article.home__content.home__content--two
        h2.home__title.home__title--two
          span About
        p.home__text.home__text--two We are a small group of developers moving the community with talks and events in Bauru - SP.
        p.home__text.home__text--two They are totally free, the companies give us their space and food so all the magic happens there. It's a mix between partnership, friendship and sharing!

    section.home__section.home__section--three
      aside.home__sidebar.home__sidebar--three
      article.home__content.home__content--three
        h2.home__title.home__title--three
          span Join Us!
        p.home__text.home__text--three If you have something cool to share or wanna be a part of it,
        p.home__text.home__text--three feel free to reach us on the links below!
        ul.home__panel
          li.home__item
            a.home__link.home__link--slack(href="https://devtalks.herokuapp.com/", target="_blank")
              svg(xmlns='http://www.w3.org/2000/svg', viewbox='0 0 24 24')
                path(fill='#FFFFFF', d='M13.3 2.004c-.214-.016-.456.023-.67.098-.872.29-1.325 1.218-1.036 2.086l.695 2.04-3.94 1.32-.648-1.97c-.29-.867-1.22-1.32-2.086-1.03-.867.288-1.348 1.218-1.055 2.085l.65 1.945-2.043.695c-.867.29-1.32 1.247-1.03 2.114.29.867 1.217 1.32 2.085 1.03l2.04-.67 1.32 3.91-1.97.648c-.867.29-1.32 1.218-1.03 2.086.292.87 1.222 1.35 2.09 1.06l1.947-.65.695 2.04c.29.868 1.243 1.32 2.11 1.03.87-.287 1.32-1.217 1.035-2.084l-.67-2.04 3.913-1.32.65 1.97c.29.867 1.217 1.32 2.085 1.03.867-.288 1.343-1.222 1.054-2.085l-.65-1.944 2.04-.696c.868-.298 1.325-1.25 1.03-2.118-.29-.867-1.22-1.32-2.084-1.03l-2.04.67-1.32-3.91 1.97-.648c.867-.29 1.324-1.22 1.03-2.086-.288-.867-1.218-1.348-2.085-1.06l-1.946.65-.696-2.04c-.22-.648-.8-1.076-1.44-1.128zm.024 7.367l1.32 3.91-3.914 1.327-1.32-3.91z')

          li.home__item
            a.home__link.home__link--twitter(href="https://twitter.com/devtalksbauru", target="_blank")
              svg(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 449.956 449.956")
                path(fill="#FFFFFF", d="M449.956 85.657c-17.702 7.614-35.408 12.37-53.102 14.28 19.985-11.992 33.503-28.932 40.546-50.82-18.28 10.847-37.787 18.268-58.532 22.267-18.274-19.414-40.73-29.125-67.383-29.125-25.502 0-47.246 8.99-65.24 26.98-17.984 17.986-26.977 39.73-26.977 65.234 0 6.85.76 13.896 2.284 21.128-37.688-1.903-73.042-11.372-106.068-28.407C82.46 110.158 54.434 87.46 31.404 59.1c-8.376 14.273-12.565 29.788-12.565 46.537 0 15.798 3.71 30.456 11.137 43.97 7.422 13.512 17.417 24.455 29.98 32.83-14.85-.57-28.743-4.474-41.684-11.707v1.142c0 22.27 6.995 41.824 20.983 58.674C53.246 247.394 70.9 258 92.216 262.38c-7.994 2.09-16.085 3.137-24.268 3.137-5.33 0-11.136-.475-17.416-1.42 5.9 18.46 16.75 33.633 32.546 45.535 15.8 11.896 33.69 18.028 53.677 18.418-33.498 26.262-71.66 39.393-114.486 39.393-8.187 0-15.608-.373-22.27-1.14C42.825 393.9 90.03 407.7 141.61 407.7c32.74 0 63.48-5.18 92.21-15.557 28.747-10.368 53.298-24.266 73.666-41.685 20.362-17.415 37.925-37.448 52.674-60.097 14.75-22.65 25.738-46.298 32.977-70.946 7.23-24.653 10.848-49.344 10.848-74.092 0-5.33-.096-9.325-.287-11.99 18.087-13.128 33.504-29.024 46.258-47.673z")

          li.home__item
            a.home__link.home__link--facebook(href="https://www.facebook.com/devtalksbauru", target="_blank")
              svg(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 470.513 470.513")
                path(fill="#FFFFFF", d="M271.52 154.17v-40.54c0-6.087.28-10.8.85-14.13.567-3.336 1.857-6.616 3.86-9.854 1.998-3.236 5.235-5.47 9.705-6.708 4.476-1.24 10.424-1.858 17.85-1.858h40.54V0h-64.81c-37.5 0-64.433 8.897-80.803 26.69-16.368 17.8-24.55 44.015-24.55 78.66v48.82h-48.543v81.085h48.538V470.51h97.362V235.257h64.805l8.566-81.086h-73.37z")

          li.home__item
            a.home__link.home__link--mail(href="mailto:devtalksbauru@gmail.com", target="_blank")
              svg(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 334.5 334.5")
                path(fill="#FFFFFF", d="M332.797 13.7c-1.49-1.307-3.608-1.61-5.404-.777L2.893 163.695c-1.747.812-2.872 2.555-2.893 4.48s1.067 3.694 2.797 4.543l91.833 45.068c1.684.827 3.692.64 5.196-.484l89.287-66.734-70.094 72.1c-1 1.03-1.51 2.438-1.4 3.868l6.977 90.89c.155 2.013 1.505 3.735 3.424 4.366.514.168 1.04.25 1.56.25 1.43 0 2.82-.613 3.788-1.733l48.74-56.484 60.256 28.79c1.308.625 2.822.65 4.15.073 1.33-.58 2.342-1.706 2.776-3.088l84.98-270.646c.594-1.89.015-3.95-1.473-5.257z")


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

  .home {
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
        background-image: url(~assets/home-02.jpg);
        background-position: center right;
        background-attachment: unset;
        background-size: contain;

        &::before {
          background-color: rgba(white, .6);
          mix-blend-mode: hue;
        }
      }

      &--three {
        background-image: url(~assets/home-03.jpg);
        background-position: 0 bottom;

        &::before {
          background-color: rgba(34, 49, 63, 0.75);
          mix-blend-mode: normal;
        }
      }
    }

    &__sidebar {
      background: rgba(#000, .75);
      height: 100%;

      &--two {
        background-color: transparent;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      padding: 0 30px;

      &--one {
        background-color: rgba(white, .5);
        mix-blend-mode: overlay;
        padding: 0;
      }

      &--two {
        background-color: rgba(#ddd, .5);
      }

      &--three {
        background-color: rgba(34, 49, 63, 0.5);
        mix-blend-mode: overlay;
      }
    }

    &__title {
      font-size: 500%;
      font-size: 12vw;
      text-transform: uppercase;

      &--one {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        bottom: 0;
        right: 5px;
        mix-blend-mode: darken;
        text-align: right;
        top: 0;
      }

      &--two {
        color: #34495E;
        position: relative;
        text-align: left;
        top: 0;
      }

      &--three {
        color: white;
        mix-blend-mode: hard-light;
        text-align: center;
      }

      > * {
        display: block;
      }
    }


    &__text {
      font-size: 2.5vw;
      margin: 0;

      &--two {
        text-align: left;
        width: 45%;
      }

      &--three {
        color: white;
        text-align: center;
      }
    }

    &__panel {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      width: 100%;
    }

    &__item {
      list-style: none;
      margin: 20px 0 0;
    }

    &__link {
      display: block;
      margin: 0 10px;

      &:hover * {
        fill: black;
      }

      * {
        display: block;
        transition: fill .2s linear;
        width: 6vw;
      }
    }
  }

</style>
