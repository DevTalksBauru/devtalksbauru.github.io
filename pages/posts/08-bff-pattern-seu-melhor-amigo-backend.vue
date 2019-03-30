<template lang="pug">
  dt-post
    h2(slot="title") BFF Pattern - Seu Melhor Amigo Backend
    h4(slot="date") 23/06/17
    p(slot="description") As grandes aplicações web de hoje em dia precisam suportar muitos tipos de dispositivos, como por exemplo mobile, web e suas diferentes interfaces para apresentação de dados. Normalmente cria-se apenas um Backend para suportar todos os tipos de dispositivos e isso é tentador, simples e reutilizável. Mas as necessidades de cada dispositivo variam, assim como as limitações entre eles, como por exemplo o limite de dados em um celular contra uma conexão mais rápida da web. Com base nessa necessidade, Phil Calçado (enquanto trabalhava na SoundCloud) cunhou o termo Backend for Frontend (ou BFF), um Pattern para sistemas baseados em serviços que propõe a criação de novos Backends conforme as necessidades de cada Frontend.
    iframe(slot="slides", src='//slides.com/helderdiin/bff-pattern/embed', scrolling='no', webkitallowfullscreen='', mozallowfullscreen='', allowfullscreen='', width='576', height='420', frameborder='0')
    a(slot="link", href="https://twitter.com/helderdiin/", target="_blank") @helderdiin
</template>

<script>
import DtPost from '~/components/Post'

export default {
  name: 'post-item',

  components: { DtPost }
}
</script>
