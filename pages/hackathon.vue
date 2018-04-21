<template lang="pug">
  .page.hackathon
    section.page__section.hackathon__section
      aside.page__sidebar.hackathon__sidebar
      article.page__content.hackathon__content

        .hackathon__info

          span.hackathon__logo
            img.hackathon__img(src="~/assets/hackathon-logo.svg", alt="hackathon logo")

          a.hackathon__button(href="https://photos.app.goo.gl/KZGbVZYUojxUp7EI3", target="_blank") Veja como foi

        .hackathon__video
          .filter
          |
          video.fillWidth(autoplay, loop)
            source(src="~/assets/hackathon-video-bg.mp4", type="video/mp4")
            source(src="~/assets/hackathon-video-bg.webm", type="video/webm")
            | Your browser does not support the video tag. I suggest you upgrade your browser.

</template>

<script>

export default {
  name: 'hackathon'
}
</script>

<style lang="scss">
  .hackathon {

    &__section {
      background-image: url(~assets/hackathon-video-bg.jpg);

      &::before {
        background-color: rgba(#559596, .9);
        content: '';
        height: 100%;
        mix-blend-mode: multiply;
        position: absolute;
        width: 100%;
      }
    }

    &__content {
      padding: 0;
      position: relative;
      overflow: hidden;
    }

    &__info {
      bottom: 0;
      height: 70%;
      left: 0;
      margin: auto;
      max-width: 80%;
      position: absolute;
      right: 0;
      top: 0;
      width: 500px;
      z-index: 1;

      @media (max-width: 760px) {
        height: 50%;
      }
    }

    @mixin glitchText($gt-name, $gt-intensity, $gt-height) {
      $gt-steps: $gt-intensity;

      // Ensure the @keyframes are generated at the root level
      @at-root {
        // We need two different ones
        @for $i from 1 through 2 {
          @keyframes error-anim-#{$i} {
            @for $i from 0 through $gt-steps {
              #{percentage($i*(1/$gt-steps))} {
                clip: rect(random($gt-height)+px,9999px,random($gt-height)+px,0);
              }
            }
          }
        }
      }
    }

    @keyframes fade {
      0% {
        opacity: 1;
      }

      25% {
        opacity: .56;
      }

      40% {
        opacity: .2;
      }
      50% {
        opacity: 1;
      }

      75% {
        opacity: .6;
      }

      90% {
        opacity: 0;
      }
      100% {
        opacity: .48;
      }
    }

    &__img,
    &__logo,
    &__logo::before,
    &__logo::after {
      height: 450px;
      width: 450px;

      @media (max-width: 760px) {
        height: 250px;
        width: 250px;
      }

      @media (max-width: 400px) {
        height: 175px;
        width: 175px;
      }
    }

    &__img {
      animation: fade 1s infinite linear alternate-reverse;
      display: block;
      left: 0;
      position: relative;
      top: -20px;
      z-index: 10;

      @media (max-width: 760px) {
        top: -10px;
      }
    }

    &__logo {
      @include glitchText("error", 20, 450);
      display: block;
      margin: auto;
      overflow: hidden;
      position: relative;

      @media (max-width: 760px) {
        margin-bottom: 100px;
      }

      &::before,
      &::after {
        content: '';
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
        position: absolute;
        top: 0;
      }

      &::after {
        animation: error-anim-1 2s infinite linear alternate-reverse;
        background: url(~assets/hackathon-logo-red.svg);
        left: 10px;
        z-index: 9;
      }

      &::before {
        animation: error-anim-2 3s infinite linear alternate-reverse;
        background: url(~assets/hackathon-logo-green.svg);
        left: 20px;
        z-index: 8;
      }
    }

    &__button {
      appearance: none;
      background-image: linear-gradient( 135deg, #F05F57 10%, #360940 100%);
      border: 0;
      bottom: 10%;
      box-shadow: 0 1px 4px rgba(0,0,0,0.275);
      color: white;
      cursor: pointer;
      display: block;
      font-weight: bold;
      font-size: 24px;
      height: 40px;
      line-height: 1.6;
      margin: 70px auto 0;
      min-width: 150px;
      padding: 10px 8px;
      position: relative;
      text-align: center;
      text-decoration: none;
      text-transform: uppercase;
      transition: all .2s linear;
      vertical-align: middle;
      white-space: nowrap;
      width: 200px;
      z-index: auto;

      &::before {
        border: 5px solid transparent;
        border-image: linear-gradient( 135deg, #F05F57 10%, #360940 100%);
        border-image-slice: 1;
        content: '';
        height: 50px;
        left: 0;
        opacity: .75;
        position: absolute;
        transform: translateX(20px) translateY(20px);
        transition: transform .2s linear;
        top: 0;
        z-index: -1;
        width: 200px;
      }

      &:hover {
        box-shadow: 1px 1px 10px rgba(255,255,255,.25);

        &::before {
          transform: translate(5px);
        }
      }
    }

    &__video {
      position: absolute;
      bottom: 0;
      z-index: 0;
    }
  }

  .is-hidden {
    // display: none !important;
  }
</style>
