<template lang="pug">
  .page
    section.page__section.page__section--podcasts
      aside.page__sidebar.page__sidebar--podcasts
      article.page__content.page__content--podcasts
        h2.page__title
          span Podcasts
        ul.page__list.page__list--bars
          li.page__list-item
            router-link(to="/podcasts/01", class="sub-nav__link")
              h5 Entrevista com RH
              span 11/03/2018
          li.page__list-item
            router-link(to="/podcasts/02", class="sub-nav__link")
              h5 Organizando um Hackathon
              span 04/04/2018
          li.page__list-item
            router-link(to="/podcasts/03", class="sub-nav__link")
              h5 Devs & Q.A's
              span 07/05/18
          li.page__list-item
            router-link(to="/podcasts/04", class="sub-nav__link")
              h5 Estágio
              span 23/06/18
          li.page__list-item
            router-link(to="/podcasts/05", class="sub-nav__link")
              h5 Eu Fico F#D!D0 Quando...
              span 17/07/18
          li.page__list-item
            router-link(to="/podcasts/06", class="sub-nav__link")
              h5 Legado e Refatoração
              span 17/07/18
          li
</template>

<script>

export default {
  name: 'podcasts'
}
</script>
