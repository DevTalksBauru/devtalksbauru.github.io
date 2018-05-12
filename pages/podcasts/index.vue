<template lang="pug">
  .page
    section.page__section.page__section--podcasts
      aside.page__sidebar.page__sidebar--podcasts
      article.page__content.page__content--podcasts
        h2.podcasts__title
          span Podcasts
        ul.page__list.page__list--bars
          li.page__list-item
            router-link(to="/podcasts/01", class="sub-nav__link")
              strong Entrevista com RH
              br
              span 11/03/2018
          li.page__list-item
            router-link(to="/podcasts/02", class="sub-nav__link")
              strong Organizando um Hackathon
              br
              span 04/04/2018
          li.page__list-item
            router-link(to="/podcasts/03", class="sub-nav__link")
              strong Devs & Q.A's
              br
              span 07/05/18
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

    &__title {
      color: #DBD3E9;
      font-size: 500%;
      font-size: 8vw;
      padding: 20px 20px 0;
      text-transform: uppercase;
    }
  }

</style>
