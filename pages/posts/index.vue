<template lang="pug">
  .page
    section.page__section.page__section--talks
      aside.page__sidebar.page__sidebar--talks
      article.page__content.page__content--talks
        h2.page__title
          span Talks
        ul.page__list.page__list--tiles
          li.page__list-item.page__list-item--tiles
            //- a.sub-nav__link(href="https://speakerdeck.com/devtalksbauru/robos-para-mercado-financeiro-com-mql", target="_blank")
            router-link(to="/posts/25-robos-para-mercado-financeiro-com-mql", class="sub-nav__link")
              h5 Robôs para Mercado Financeiro com MQL
              span 27/03/2019
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/24", class="sub-nav__link")
            a.sub-nav__link(href="#", target="_blank")
              h5 Vue + GraphQL = ♥
              span 26/01/2019
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/24", class="sub-nav__link")
            a.sub-nav__link(href="#", target="_blank")
              h5 Construindo API em GraphQL
              span 26/01/2019
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/24", class="sub-nav__link")
            a.sub-nav__link(href="#", target="_blank")
              h5 Introdução a NoSQL com MongoDB
              span 26/01/2019
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/23", class="sub-nav__link")
            a.sub-nav__link(href="#", target="_blank")
              h5 Introdução ao universo React Native
              span 30/10/2018
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/22", class="sub-nav__link")
            a.sub-nav__link(href="#", target="_blank")
              h5 Go, Goroutines, Concorrência e Outros Bichos
              span 13/09/2018
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/21", class="sub-nav__link")
            a.sub-nav__link(href="https://docs.google.com/presentation/d/1FlXklpTCZE_-TaQnOqEFLOlUiK2LD7Qt9eybkevR0BM/present?includes_info_params=1#slide=id.g3f96bb0e7d_0_10", target="_blank")
              h5 Como Garantir a Qualidade da sua Aplicação
              span 13/08/2018
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/20", class="sub-nav__link")
            a.sub-nav__link(href="https://docs.google.com/presentation/d/1B7UElyPJnHTL6-kih_NlN6FHE8sQzqvXg9nhpujkD50/present?includes_info_params=1#slide=id.gc6f73a04f_0_0", target="_blank")
              h5 BDD - Além da Automação
              span 08/06/2018
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/19", class="sub-nav__link")
            a.sub-nav__link(href="https://speakerdeck.com/omarkdev/php7-not-for-kids", target="_blank")
              h5 PHP 7: Not For Kids
              span 10/05/2018
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/18", class="sub-nav__link")
            a.sub-nav__link(href="https://drive.google.com/file/d/1uB2Cqjrbp2wXFxdUccp9IJY92-9zrHNt/view?usp=sharing", target="_blank")
              h5 A Verdade sobe Frameworks
              span 09/04/2018
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/17", class="sub-nav__link")
            a.sub-nav__link(href="https://docs.google.com/presentation/d/e/2PACX-1vTYFkCaXtMgDIHXCmWiCVjNH33oPjWM2lhNcQQZkc86Nv853u_ImpCNoacdI6M6jIRgmgOrJB-c-JQ3/pub?start=false&loop=false&delayms=3000", target="_blank")
              h5 Home Office: Você e a sua empresa estão preparados?
              span 22/03/2018
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/16", class="sub-nav__link")
            a.sub-nav__link(href="https://pt.slideshare.net/giovanni.bassi/net-core-aspnet-core-e-net-standard-2", target="_blank")
              h5 Conhecendo o .NET Core
              span 19/01/2018
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/15", class="sub-nav__link")
            a.sub-nav__link(href="https://speakerdeck.com/devtalksbauru/devtalks-number-16-diminua-seu-codigo-java-com-kotlin", target="_blank")
              h5 Diminua seu código Java com Kotlin
              span 23/11/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/14", class="sub-nav__link")
            a.sub-nav__link(href="https://speakerdeck.com/omarkdev/o-que-nao-te-contaram-sobre-a-carreira-de-dev", target="_blank")
              h5 O Que não te contaram sobre a carreira de Dev
              span 14/11/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/13", class="sub-nav__link")
            a.sub-nav__link(href="https://slides.com/lucasrodrigues-5/clean-code#/", target="_blank")
              h5 Clean Code: Tornando o código mais fácil de entender
              span 19/10/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/12", class="sub-nav__link")
            a.sub-nav__link(href="https://www.slideshare.net/secret/3DfYO1rzuI8Jzp", target="_blank")
              h5 Testes Automatizados para Web com Cucumber, Capybara e Ruby
              span 31/08/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/11", class="sub-nav__link")
            a.sub-nav__link(href="https://www.slideshare.net/RafaelFantinidaCosta/funk-ou-bossa-nova", target="_blank")
              h5 Funk ou Bossa Nova? Descobrindo o Gênero com Machine Learning
              span 10/08/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/10", class="sub-nav__link")
            a.sub-nav__link(href="https://www.facebook.com/media/set/?set=a.342818059488732&type=1&l=b7044bb8e3", target="_blank")
              h5 Chatbots - O que comem, onde vivem e porque falar sobre
              span 20/07/17
          li.page__list-item.page__list-item--tiles
            router-link(to="/posts/09-back-end-e-front-end-em-harmonia-com-atomic-design", class="sub-nav__link")
              h5 Back-end & Front-end em Harmonia com Atomic Design
              span 06/07/17
            //- a.sub-nav__link(href="https://speakerdeck.com/matheusagcosta/back-end-and-front-end-em-harmonia-com-atomic-design", target="_blank")
          li.page__list-item.page__list-item--tiles
            //- a.sub-nav__link(href="https://slides.com/helderdiin/bff-pattern#/", target="_blank")
            router-link(to="/posts/08-bff-pattern-seu-melhor-amigo-backend", class="sub-nav__link")
              h5 BFF Pattern - Seu Melhor Amigo Backend
              span 23/06/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/07", class="sub-nav__link")
            a.sub-nav__link(href="https://www.facebook.com/media/set/?set=a.547781638992372&type=1&l=dedd35cac3", target="_blank")
              h5 Usando Infraestrutura como Código
              span 11/05/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/06", class="sub-nav__link")
            a.sub-nav__link(href="https://www.facebook.com/media/set/?set=a.288538551583350&type=1&l=ce157403ad", target="_blank")
              h5 Introdução ao Golang
              span 30/03/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/05", class="sub-nav__link")
            a.sub-nav__link(href="https://www.facebook.com/media/set/?set=a.271185336652005&type=1&l=cd7196b3fa", target="_blank")
              h5 Somos Todos UX
              span 23/02/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/04", class="sub-nav__link")
            a.sub-nav__link(href="https://www.facebook.com/media/set/?set=a.547778488992687&type=1&l=c691c78682", target="_blank")
              h5 Microservices
              span 11/02/17
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/03", class="sub-nav__link")
            a.sub-nav__link(href="https://www.facebook.com/media/set/?set=a.547779915659211&type=1&l=81723c0884", target="_blank")
              h5 O Mercado de Games
              span 10/12/16
          li.page__list-item.page__list-item--tiles
            // router-link(to="/posts/02", class="sub-nav__link")
            a.sub-nav__link(href="https://www.sympla.com.br/design-patterns-na-vida-real__98559", target="_blank")
              h5 Design Patterns na Vida Real
              span 05/11/16
          // Keep this two list items to make layout consistent
          li.page__list-item--tiles.page__list-item--empty

</template>

<script>

export default {
  name: 'talks'
}
</script>
