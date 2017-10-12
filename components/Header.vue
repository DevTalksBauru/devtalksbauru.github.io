<template lang="pug">
  header.header
    nav.nav
      li.nav__item.nav__item--logo
        svg.logo#Balloon(data-name='Balloon', xmlns='http://www.w3.org/2000/svg', viewbox='0 0 2000 2000')
          defs
            style.
             .cls-1 { fill: #212020; stroke: #f4ece0; stroke-linejoin: round; stroke-width: 10px; } .cls-1, .cls-2, .cls-3 { fill-rule: evenodd; } .cls-2 { fill: #f5623d; } .cls-3 { fill: #f4ece0; }
          path.cls-1(d='M1004 1547.75a556.4 556.4 0 0 1-135.713-16.74l-200.876 35.87 38.347-106.02C551.722 1362.47 449.6 1190.11 449.6 993.924 449.6 688.056 697.813 440.1 1004 440.1s554.4 247.956 554.4 553.824-248.21 553.826-554.4 553.826z')
          g#Sign
            g#_(data-name='<')
              path#Rounded_Rectangle_1.cls-2(data-name='Rounded Rectangle 1', d='M763.277 861.972L624.97 1001.9l141.954 141.42a50.3 50.3 0 0 1 .237 70.75 49.385 49.385 0 0 1-70.21.24l-173.45-172.8a57.288 57.288 0 0 1-2.807-75.76l171.944-173.956a49.787 49.787 0 1 1 70.64 70.178z')
            path#_2.cls-3(data-name='/', d='M766.325 1289.44l347.605-622.973A49.784 49.784 0 1 1 1200.87 715l-347.6 622.972a49.785 49.785 0 1 1-86.945-48.532z')
            g#_3(data-name='>')
              path#Rounded_Rectangle_1_copy_6.cls-2(data-name='Rounded Rectangle 1 copy 6', d='M1486.48 1030.74a49.19 49.19 0 0 1-7.56 9.86l-170.32 173.53a49.068 49.068 0 0 1-69.74.24 49.928 49.928 0 0 1-.24-70.25l139.95-142.57-137.63-138.077a50.432 50.432 0 0 1-.24-70.58 48.674 48.674 0 0 1 69.55-.24l171.82 172.377a50.444 50.444 0 0 1 4.41 65.71z')
      li.nav__item.nav__item--home
        router-link(to="/", class="nav__link") Home
      li.nav__item.nav__item--talks
        router-link(to="/posts", class="nav__link") Talks
      li.nav__item.nav__item--hackathon
        router-link(to="/podcasts", class="nav__link") Podcasts
      li.nav__item.nav__item--podcasts
        router-link(to="/hackathon", class="nav__link") Hackathon

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
    padding: 30px;
    list-style: none;
    position: relative;
    left: 0;
    top: 0;
    z-index: auto;

    &__item {
      max-width: 200px;
      width: auto;
    }

    &__link {
      display: block;
      color: #ef4a2f;
      font-weight: normal;
      height: 40px;
      text-transform: lowercase;
      text-decoration: none;
      transition: transform .35s linear;
      pointer-events: none;
      position: relative;
      z-index: 2;

      &:not(.nav__link--actived):hover,
      .nav__item:hover:not(:first-of-type) & {
        transform: translateX(25px);
      }

      &--img {
        max-width: 100px;
      }
    }
  }

  .logo {

    * {
      transition: fill .2s linear;
    }

    &:hover {

      .cls-2,
      .cls-3 {
        fill: white;
      }
    }
  }
</style>
