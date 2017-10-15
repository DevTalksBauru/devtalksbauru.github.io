<template lang="pug">
  header.header
    nav.nav
      li.nav__item.nav__item--logo
        svg.logo#Balloon(data-name='Balloon', xmlns='http://www.w3.org/2000/svg', viewbox='0 0 2000 2000')
          defs
            style.
             .cls-1 { fill: #212020; stroke: #f4ece0; stroke-linejoin: round; stroke-width: 10px; } .cls-1, .cls-2, .cls-3 { fill-rule: evenodd; } .cls-2 { fill: #f5623d; } .cls-3 { fill: #f4ece0; }
          path.cls-1(d='M1004 1547.75a556.4 556.4 0 0 1-135.713-16.74l-200.876 35.87 38.347-106.02C551.722 1362.47 449.6 1190.11 449.6 993.924 449.6 688.056 697.813 440.1 1004 440.1s554.4 247.956 554.4 553.824-248.21 553.826-554.4 553.826z')
          g#sign
            g#_(data-name='<')
              path#Rounded_Rectangle_1.cls-2(data-name='Rounded Rectangle 1', d='M763.277 861.972L624.97 1001.9l141.954 141.42a50.3 50.3 0 0 1 .237 70.75 49.385 49.385 0 0 1-70.21.24l-173.45-172.8a57.288 57.288 0 0 1-2.807-75.76l171.944-173.956a49.787 49.787 0 1 1 70.64 70.178z')
            path#_2.cls-3(data-name='/', d='M766.325 1289.44l347.605-622.973A49.784 49.784 0 1 1 1200.87 715l-347.6 622.972a49.785 49.785 0 1 1-86.945-48.532z')
            g#_3(data-name='>')
              path#Rounded_Rectangle_1_copy_6.cls-2(data-name='Rounded Rectangle 1 copy 6', d='M1486.48 1030.74a49.19 49.19 0 0 1-7.56 9.86l-170.32 173.53a49.068 49.068 0 0 1-69.74.24 49.928 49.928 0 0 1-.24-70.25l139.95-142.57-137.63-138.077a50.432 50.432 0 0 1-.24-70.58 48.674 48.674 0 0 1 69.55-.24l171.82 172.377a50.444 50.444 0 0 1 4.41 65.71z')
      li.nav__item.nav__item--home
        router-link(to="/", class="nav__link")
          svg.nav__icon(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 360 360")
            path(d="M352.163 163.115L198.92 9.87c-10.45-10.448-27.39-10.448-37.84 0L7.838 163.116c-7.652 7.652-9.94 19.16-5.8 29.158 4.142 9.998 13.898 16.516 24.72 16.516h20.76v114.573c0 19.112 15.494 34.603 34.604 34.603h195.76c19.11 0 34.602-15.492 34.602-34.603V208.79h20.762c10.82 0 20.578-6.52 24.72-16.517 4.14-9.998 1.85-21.506-5.8-29.158zM220.43 307.785h-80.86v-45.583c0-22.33 18.1-40.43 40.43-40.43s40.43 18.1 40.43 40.43v45.583z")
          | Home

      li.nav__item.nav__item--talks
        router-link(to="/posts", class="nav__link")
          svg.nav__icon(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 370 370")
            path(d="M314.834 50.23C280.024 20.045 233.914 3.423 185 3.423c-48.915 0-95.024 16.622-129.834 46.807C19.593 81.077 0 122.317 0 166.35c0 43.133 19.228 84.074 53.263 114.442-15.777 27.354-42.246 53.008-42.55 53.302-5.765 5.544-7.41 14.117-4.11 21.4 3.08 6.79 9.833 11.083 17.19 11.083.538 0 1.082-.023 1.627-.07 3.17-.273 76.435-6.887 140.01-38.14 6.52.606 13.08.913 19.57.913 48.916 0 95.025-16.623 129.835-46.807C350.407 251.623 370 210.385 370 166.35c0-44.033-19.593-85.273-55.166-116.12zM90.61 185c-15.74 0-28.55-12.808-28.55-28.55 0-15.743 12.81-28.55 28.55-28.55 15.745 0 28.552 12.807 28.552 28.55 0 15.742-12.807 28.55-28.55 28.55zm94.39 0c-15.742 0-28.55-12.808-28.55-28.55 0-15.743 12.808-28.55 28.55-28.55s28.55 12.807 28.55 28.55c0 15.742-12.808 28.55-28.55 28.55zm94.39 0c-15.745 0-28.552-12.808-28.552-28.55 0-15.743 12.807-28.55 28.55-28.55 15.742 0 28.552 12.807 28.552 28.55 0 15.742-12.81 28.55-28.55 28.55z")
          | Talks

      li.nav__item.nav__item--hackathon
        router-link(to="/podcasts", class="nav__link")
          svg.nav__icon(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 492.554 492.554")
            path(d="M492.554 351.683c0-26.574-10.246-50.702-26.912-68.843v-51.39c0-120.955-98.4-219.363-219.355-219.363S26.915 110.497 26.915 231.45v49.808C10.247 299.4 0 323.518 0 350.085c0 46.98 31.828 86.426 75.068 98.23v3.696c0 14.84 12.03 26.87 26.867 26.87 14.835 0 26.865-12.03 26.865-26.867V248.167c0-14.837-12.03-26.867-26.865-26.867-6.34 0-12.095 2.294-16.7 5.975 2.237-86.98 73.545-157.077 161.05-157.077 88.072 0 159.754 70.99 161.115 158.74-4.603-3.73-10.395-6.05-16.78-6.05-14.837 0-26.865 12.03-26.865 26.868v203.847c0 14.836 12.028 26.865 26.865 26.865 14.835 0 26.864-12.03 26.864-26.865v-3.697c43.244-11.798 75.07-51.244 75.07-98.223z")
          | Podcasts
      li.nav__item.nav__item--podcasts
        router-link(to="/hackathon", class="nav__link")
          svg.nav__icon(xmlns="http://www.w3.org/2000/svg", viewbox="0 0 493.859 493.859")
            path(d="M150.976 317.916l-71.003-71.004 71.003-71.004c12.94-12.94 12.94-33.902 0-46.842-12.923-12.94-33.9-12.94-46.84 0L9.706 223.49C3.493 229.702 0 238.128 0 246.912c0 8.783 3.493 17.21 9.704 23.42l94.433 94.424c6.47 6.47 14.944 9.705 23.42 9.705 8.475 0 16.958-3.234 23.42-9.703 12.94-12.94 12.94-33.9 0-46.84zm333.177-94.426l-94.43-94.424c-12.94-12.94-33.92-12.94-46.842 0-12.937 12.94-12.937 33.9 0 46.842l71.006 71.004-71.004 71.004c-12.938 12.94-12.938 33.9 0 46.84 6.464 6.47 14.947 9.705 23.422 9.705 8.475 0 16.95-3.234 23.42-9.703l94.43-94.424c6.212-6.21 9.707-14.637 9.707-23.42 0-8.784-3.495-17.21-9.706-23.422zM322.405 58.644c-16.877-6.842-36.278 1.2-43.193 18.13L150.346 391.977c-6.922 16.934 1.19 36.277 18.123 43.2 4.1 1.667 8.344 2.476 12.524 2.476 13.053 0 25.426-7.78 30.667-20.605l128.867-315.2c6.922-16.935-1.188-36.28-18.123-43.203z")
          | Hackathon


</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="scss">
  .header {
    position: fixed;
    height: 100%;
    width: auto;
    z-index: 1;
  }

  .nav {
    font-family: 'Anton', sans-serif;
    height: calc(100% - 20px);
    left: 0;
    list-style: none;
    padding: 30px;
    position: relative;
    top: 0;
    z-index: auto;

    @media (max-width: 789px) {
      padding: 10px;
    }

    &__item {
      max-width: 200px;
      width: auto;

      @media (max-width: 789px) {
        margin: 10px 0;
      }
    }

    &__link {
      align-items: center;
      color: #ef4a2f;
      cursor: pointer;
      display: flex;
      font-size: 2.5vw;
      font-weight: normal;
      height: 40px;
      position: relative;
      text-decoration: none;
      text-transform: lowercase;
      transition: transform .35s linear;
      width: 100%;
      z-index: 2;

      @media (max-width: 789px) {
        font-size: 0;
      }

      &::before {
        background-color: black;
        bottom: 0;
        content: '';
        height: 40px;
        left: 0;
        mix-blend-mode: soft-light;
        position: absolute;
        transform: translateX(-120%);
        transition: transform .2s linear;
        width: 120%;
      }

      &:hover::before {
        transform: translateX(-30px);
      }

      &.nuxt-link-exact-active {
        cursor: default;

        &::before {
          mix-blend-mode: color;
          transform: translateX(-30px);
        }
      }

      &--img {
        max-width: 100px;
      }
    }

    &__icon {
      fill: #ef4a2f;
      height: 3.5vh;
      margin: 0 10px 0 0;
      width: 2vw;

      @media (max-width: 789px) {
        height: 100%;
        margin: 0 auto;
        max-width: 7vw;
        width: 100%;
      }
    }
  }

  .logo {
    width: 15vw;

    * {
      transition: all .2s linear;
      transform-origin: center;
    }

    &:hover {

      .cls-2,
      .cls-3 {
        fill: white;
      }

      #sign {
        transform: rotate(180deg);
      }
    }
  }
</style>
