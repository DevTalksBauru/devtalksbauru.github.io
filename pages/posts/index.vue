<template lang="pug">
  .page
    section.page__section.home__section.talks__section
      aside.talks__sidebar
      article.talks__content
        h2.talks__title
          span Talks
        ul.page__list.page__list--tiles
          li.page__list-item.talks__list-item
            router-link(to="/posts/01", class="sub-nav__link")
              strong A Verdade sobe Frameworks
              br
              span 09/04/2018
          li.page__list-item.talks__list-item
            router-link(to="/posts/02", class="sub-nav__link")
              strong Home Office: Você e a sua empresa estão preparados?
              br
              span 22/03/2018
          li.page__list-item.talks__list-item
            router-link(to="/posts/01", class="sub-nav__link")
              strong Conhecendo o .NET Core
              br
              span 19/01/18
          li.page__list-item.talks__list-item
            router-link(to="/posts/02", class="sub-nav__link")
              strong Diminua seu código Java com Kotlin
              br
              span 23/11/17
          li.page__list-item.talks__list-item
            router-link(to="/posts/01", class="sub-nav__link")
              strong O Que não te contaram sobre a carreira de Dev
              br
              span 14/11/17
          li.page__list-item.talks__list-item
            router-link(to="/posts/02", class="sub-nav__link")
              strong Clean Code: Tornando o código mais fácil de entender
              br
              span 19/10/17
          li.page__list-item.talks__list-item
            router-link(to="/posts/01", class="sub-nav__link")
              strong Testes Automatizados para Web com Cucumber, Capybara e Ruby
              br
              span 31/08/17
          li.page__list-item.talks__list-item
            router-link(to="/posts/02", class="sub-nav__link")
              strong Funk ou Bossa Nova? Descobrindo o Gênero com Machine
              brLearning
              span 10/08/17
          li.page__list-item.talks__list-item
            router-link(to="/posts/01", class="sub-nav__link")
              strong Chatbot: O que Comem, onde vivem e porque falar sobre
              br
              span 20/07/17
          li.page__list-item.talks__list-item
            router-link(to="/posts/02", class="sub-nav__link")
              strong Back-end & Front-end em Harmonia com Atomic Design
              br
              span 06/07/17
          li.page__list-item.talks__list-item
            router-link(to="/posts/01", class="sub-nav__link") #08 - Testes Automatizados para Web com Cucumber, Capybara e Ruby
          li.page__list-item.talks__list-item
            router-link(to="/posts/02", class="sub-nav__link") #07 - Funk ou Bossa Nova? Descobrindo o Gênero com Machine Learning
          li.talks__list-item
</template>

<script>

export default {
  name: 'talks'
}
</script>

<style lang="scss">

  .talks {

    &__section {
      background-image: url(~assets/talks-bg.jpg);
      background-position: center;
      overflow: auto;
    }

    &__sidebar::before {
      background: rgba(29, 21, 84, 0.6);
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

    &__list-item {
      flex: 1 0 350px;
      align-self: stretch;
      box-sizing: border-box;
      max-width: 100%;
      margin: 0 20px 20px 0;
    }
  }

</style>
