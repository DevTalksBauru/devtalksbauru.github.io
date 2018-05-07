<template lang="pug">
  .page
    section.page__section.home__section.podcasts__section
      aside.podcasts__sidebar
      article.podcasts__content
        h2.podcasts__title
          span Podcasts
        ul.page__list.page__list--bars
          li.page__list-item
            router-link(to="/podcasts/01", class="sub-nav__link")
              strong Entrevista com RH
              br
              span 09/04/2018
          li.page__list-item
            router-link(to="/podcasts/02", class="sub-nav__link")
              strong Organizando um Hackathon
              br
              span 22/03/2018
          li.page__list-item
            router-link(to="/podcasts/03", class="sub-nav__link")
              strong Devs & Q.A's
              br
              span 19/01/18
          li
</template>

<script>

export default {
  name: 'podcasts'
}
</script>


<style lang="scss">

  .hidden {
    display: none !important;
  }

  .podcasts {

    &__section {
      background-image: url(~assets/podcasts-bg.jpg);
      background-position: center;
      overflow: auto;
    }

    &__sidebar::before {
      background: rgba(3, 22, 57, 0.6);
      content: '';
      height: 100%;
      position: fixed;
      width: 20%;
    }

    &__content {
      mix-blend-mode: hard-light;
    }

    &__title {
      color: #DBD3E9;
      font-size: 500%;
      font-size: 8vw;
      padding: 20px 20px 0;
      text-transform: uppercase;
    }
  }

</style>
