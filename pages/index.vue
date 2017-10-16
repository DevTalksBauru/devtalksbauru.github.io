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
          span About Us
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
              svg.home__icon(xmlns='http://www.w3.org/2000/svg', viewbox='0 0 24 24')

          li.home__item
            a.home__link.home__link--twitter(href="https://twitter.com/devtalksbauru", target="_blank")
              svg.home__icon(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 449.956 449.956")

          li.home__item
            a.home__link.home__link--facebook(href="https://www.facebook.com/devtalksbauru", target="_blank")

          li.home__item
            a.home__link.home__link--mail(href="mailto:devtalksbauru@gmail.com", target="_blank")


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

      @media (max-width: 686px) {
        background-attachment: unset;
      }

      @media (max-width: 989px) {
        background-size: auto 100%;
      }

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
        background-size: auto 100%;

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
        background-color: white;
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

      &--one {
        background-color: rgba(white, .5);
        mix-blend-mode: overlay;
        padding: 0;
      }

      &--two {
        background-color: rgba(#ddd, .5);

        @media (max-width: 989px) {
          background-color: rgba(#ddd, .85);
        }
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

      @media (max-width: 686px) {
        font-size: 19vw;
      }

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
        mix-blend-mode: multiply;
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

      @media (max-width: 989px) {
        font-size: 4vw;
      }

      @media (max-width: 686px) {
        font-size: 5vw;
      }

      @media (max-width: 480px) {
        font-size: 6vw;
      }

      &--two {
        color: #000;
        text-align: left;
        width: 60%;

        @media (max-width: 989px) {
          width: 100%;
        }
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
      height: 100px;
      width: 6vw;
      position: relative;

      @media (max-width: 789px) {
        width: 10vw;
      }

      &::after,
      &::before {
        content: '';
        position: absolute;
        transition: all .2s linear;
        width: 100%;
      }

      &::after {
        background-color: black;
        bottom: 0;
        height: 5px;
        left: 0;
        transform: scale(0);
        transform-origin: bottom center;
      }

      &::before {
        background-repeat: no-repeat;
        height: 100%;
      }

      &:hover::after {
        transform: scale(1);
      }

      &:hover::before {
        transform: translateY(-5px);
      }

      &--facebook::before {
        background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20470.513%20470.513%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M271.52%20154.17v-40.54c0-6.087.28-10.8.85-14.13.567-3.336%201.857-6.616%203.86-9.854%201.998-3.236%205.235-5.47%209.705-6.708%204.476-1.24%2010.424-1.858%2017.85-1.858h40.54V0h-64.81c-37.5%200-64.433%208.897-80.803%2026.69-16.368%2017.8-24.55%2044.015-24.55%2078.66v48.82h-48.543v81.085h48.538V470.51h97.362V235.257h64.805l8.566-81.086h-73.37z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
      }

      &--twitter::before {
        background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20449.956%20449.956%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M449.956%2085.657c-17.702%207.614-35.408%2012.37-53.102%2014.28%2019.985-11.992%2033.503-28.932%2040.546-50.82-18.28%2010.847-37.787%2018.268-58.532%2022.267-18.274-19.414-40.73-29.125-67.383-29.125-25.502%200-47.246%208.99-65.24%2026.98-17.984%2017.986-26.977%2039.73-26.977%2065.234%200%206.85.76%2013.896%202.284%2021.128-37.688-1.903-73.042-11.372-106.068-28.407C82.46%20110.158%2054.434%2087.46%2031.404%2059.1c-8.376%2014.273-12.565%2029.788-12.565%2046.537%200%2015.798%203.71%2030.456%2011.137%2043.97%207.422%2013.512%2017.417%2024.455%2029.98%2032.83-14.85-.57-28.743-4.474-41.684-11.707v1.142c0%2022.27%206.995%2041.824%2020.983%2058.674C53.246%20247.394%2070.9%20258%2092.216%20262.38c-7.994%202.09-16.085%203.137-24.268%203.137-5.33%200-11.136-.475-17.416-1.42%205.9%2018.46%2016.75%2033.633%2032.546%2045.535%2015.8%2011.896%2033.69%2018.028%2053.677%2018.418-33.498%2026.262-71.66%2039.393-114.486%2039.393-8.187%200-15.608-.373-22.27-1.14C42.825%20393.9%2090.03%20407.7%20141.61%20407.7c32.74%200%2063.48-5.18%2092.21-15.557%2028.747-10.368%2053.298-24.266%2073.666-41.685%2020.362-17.415%2037.925-37.448%2052.674-60.097%2014.75-22.65%2025.738-46.298%2032.977-70.946%207.23-24.653%2010.848-49.344%2010.848-74.092%200-5.33-.096-9.325-.287-11.99%2018.087-13.128%2033.504-29.024%2046.258-47.673z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
      }

      &--slack::before {
        background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M13.3%202.004c-.214-.016-.456.023-.67.098-.872.29-1.325%201.218-1.036%202.086l.695%202.04-3.94%201.32-.648-1.97c-.29-.867-1.22-1.32-2.086-1.03-.867.288-1.348%201.218-1.055%202.085l.65%201.945-2.043.695c-.867.29-1.32%201.247-1.03%202.114.29.867%201.217%201.32%202.085%201.03l2.04-.67%201.32%203.91-1.97.648c-.867.29-1.32%201.218-1.03%202.086.292.87%201.222%201.35%202.09%201.06l1.947-.65.695%202.04c.29.868%201.243%201.32%202.11%201.03.87-.287%201.32-1.217%201.035-2.084l-.67-2.04%203.913-1.32.65%201.97c.29.867%201.217%201.32%202.085%201.03.867-.288%201.343-1.222%201.054-2.085l-.65-1.944%202.04-.696c.868-.298%201.325-1.25%201.03-2.118-.29-.867-1.22-1.32-2.084-1.03l-2.04.67-1.32-3.91%201.97-.648c.867-.29%201.324-1.22%201.03-2.086-.288-.867-1.218-1.348-2.085-1.06l-1.946.65-.696-2.04c-.22-.648-.8-1.076-1.44-1.128zm.024%207.367l1.32%203.91-3.914%201.327-1.32-3.91z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
      }

      &--mail::before {
        background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20334.5%20334.5%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M332.797%2013.7c-1.49-1.307-3.608-1.61-5.404-.777L2.893%20163.695c-1.747.812-2.872%202.555-2.893%204.48s1.067%203.694%202.797%204.543l91.833%2045.068c1.684.827%203.692.64%205.196-.484l89.287-66.734-70.094%2072.1c-1%201.03-1.51%202.438-1.4%203.868l6.977%2090.89c.155%202.013%201.505%203.735%203.424%204.366.514.168%201.04.25%201.56.25%201.43%200%202.82-.613%203.788-1.733l48.74-56.484%2060.256%2028.79c1.308.625%202.822.65%204.15.073%201.33-.58%202.342-1.706%202.776-3.088l84.98-270.646c.594-1.89.015-3.95-1.473-5.257z%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
      }
    }
  }

</style>
