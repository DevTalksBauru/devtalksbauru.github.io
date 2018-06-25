<template lang="pug">
  .page
    section.page__section.page__section--talks
      aside.page__sidebar.page__sidebar--talks
      article.page__content.page__content--talks
        h2.page__title
          span Talks
        ul.page__list.page__list--tiles
          li.page__list-item.page__list-item--talks
<<<<<<< HEAD
            router-link(to="/posts/#", class="sub-nav__link")
              h5 PHP 7: Not For Kids
              span 10/05/2018
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 A Verdade sobe Frameworks
              span 09/04/2018
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 Home Office: Você e a sua empresa estão preparados?
              span 22/03/2018
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 Conhecendo o .NET Core
              span 19/01/18
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 Diminua seu código Java com Kotlin
              span 23/11/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 O Que não te contaram sobre a carreira de Dev
              span 14/11/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 Clean Code: Tornando o código mais fácil de entender
              span 19/10/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 Testes Automatizados para Web com Cucumber, Capybara e Ruby
              span 31/08/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 Funk ou Bossa Nova? Descobrindo o Gênero com Machine Learning
              span 10/08/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
              h5 Chatbots: O que Comem, onde vivem e porque falar sobre
              span 20/07/17
          li.page__list-item.page__list-item--talks
            router-link(to="/posts/#", class="sub-nav__link")
=======
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://docs.google.com/presentation/d/1B7UElyPJnHTL6-kih_NlN6FHE8sQzqvXg9nhpujkD50/present?includes_info_params=1#slide=id.gc6f73a04f_0_0", target="_blank")
              h5 BDD - Além da Automação
              span 08/06/2018
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://speakerdeck.com/omarkdev/php7-not-for-kids", target="_blank")
              h5 PHP 7: Not For Kids
              span 10/05/2018
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://drive.google.com/file/d/1uB2Cqjrbp2wXFxdUccp9IJY92-9zrHNt/view?usp=sharing", target="_blank")
              h5 A Verdade sobe Frameworks
              span 09/04/2018
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://docs.google.com/presentation/d/e/2PACX-1vTYFkCaXtMgDIHXCmWiCVjNH33oPjWM2lhNcQQZkc86Nv853u_ImpCNoacdI6M6jIRgmgOrJB-c-JQ3/pub?start=false&loop=false&delayms=3000", target="_blank")
              h5 Home Office: Você e a sua empresa estão preparados?
              span 22/03/2018
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://speakerdeck.com/devtalksbauru/devtalks-number-16-diminua-seu-codigo-java-com-kotlin", target="_blank")
              h5 Diminua seu código Java com Kotlin
              span 23/11/17
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://speakerdeck.com/omarkdev/o-que-nao-te-contaram-sobre-a-carreira-de-dev", target="_blank")
              h5 O Que não te contaram sobre a carreira de Dev
              span 14/11/17
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://slides.com/lucasrodrigues-5/clean-code#/", target="_blank")
              h5 Clean Code: Tornando o código mais fácil de entender
              span 19/10/17
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://www.slideshare.net/secret/3DfYO1rzuI8Jzp", target="_blank")
              h5 Testes Automatizados para Web com Cucumber, Capybara e Ruby
              span 31/08/17
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://www.slideshare.net/RafaelFantinidaCosta/funk-ou-bossa-nova", target="_blank")
              h5 Funk ou Bossa Nova? Descobrindo o Gênero com Machine Learning
              span 10/08/17
          li.page__list-item.page__list-item--talks
            // router-link(to="/posts/09", class="sub-nav__link")
            a.sub-nav__link(href="https://speakerdeck.com/matheusagcosta/back-end-and-front-end-em-harmonia-com-atomic-design", target="_blank")
>>>>>>> 7ebb0601de7948d84b8a2d04bf8badea84ca779d
              h5 Back-end & Front-end em Harmonia com Atomic Design
              span 06/07/17
          li.page__list-item.page__list-item--talks
            a.sub-nav__link(href="https://slides.com/helderdiin/bff-pattern#/", target="_blank")
              h5 BFF Pattern - Seu Melhor Amigo Backend
              span 23/06/17
          // Keep this two list items to make layout consistent
          li.page__list-item--talks
          li.page__list-item--talks
</template>

<script>

export default {
  name: 'talks'
}
</script>
