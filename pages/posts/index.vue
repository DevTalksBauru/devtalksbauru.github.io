<template lang="pug">
  .page.home
    section.home__section.home__section--one
      aside.home__sidebar.home__sidebar--one
      article.home__content.home__content--one
        h1.home__title.home__title--one Soon
        ul.hidden
          li
            router-link(to="/posts/01", class="sub-nav__link") DevTalks 01
          li
            router-link(to="/posts/02", class="sub-nav__link") DevTalks 02
</template>

<script>

export default {
  name: 'talks'
}
</script>

<style type="scss">
  .hidden {
    display: none;
  }
</style>
