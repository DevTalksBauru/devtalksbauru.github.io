<template lang="pug">
  .page
    section.page__section.page__section--talks
      aside.page__sidebar.page__sidebar--talks
      article.page__content.page__content--talks
        h2.page__title
          span Talks
        ul.page__list.page__list--tiles
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/19", class="sub-nav__link")
              h5 PHP 7: Not For Kids
              span 10/05/2018
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/18", class="sub-nav__link")
              h5 A Verdade sobe Frameworks
              span 09/04/2018
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/17", class="sub-nav__link")
              h5 Home Office: Você e a sua empresa estão preparados?
              span 22/03/2018
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/16", class="sub-nav__link")
              h5 Conhecendo o .NET Core
              span 19/01/18
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/15", class="sub-nav__link")
              h5 Diminua seu código Java com Kotlin
              span 23/11/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/14", class="sub-nav__link")
              h5 O Que não te contaram sobre a carreira de Dev
              span 14/11/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/13", class="sub-nav__link")
              h5 Clean Code: Tornando o código mais fácil de entender
              span 19/10/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/12", class="sub-nav__link")
              h5 Testes Automatizados para Web com Cucumber, Capybara e Ruby
              span 31/08/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/11", class="sub-nav__link")
              h5 Funk ou Bossa Nova? Descobrindo o Gênero com Machine Learning
              span 10/08/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/10", class="sub-nav__link")
              h5 Chatbots: O que Comem, onde vivem e porque falar sobre
              span 20/07/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/09", class="sub-nav__link")
              h5 Back-end & Front-end em Harmonia com Atomic Design
              span 06/07/17
          // Keep this two list items to make layout consistent
          li.page__list-item--talks
          li.page__list-item--talks
</template>

<script>

export default {
  name: 'talks'
}
</script>
