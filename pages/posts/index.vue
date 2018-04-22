<template lang="pug">
  .page
    section.page__section.home__section.talks__section
      aside.page__sidebar.talks__sidebar
      article.home__content.home__content--one
        ul.page__list
          li.page__list-item
            router-link(to="/posts/01", class="sub-nav__link") DevTalks 01
          li.page__list-item
            router-link(to="/posts/02", class="sub-nav__link") DevTalks 02
          li.page__list-item
            router-link(to="/posts/01", class="sub-nav__link") DevTalks 01
          li.page__list-item
            router-link(to="/posts/02", class="sub-nav__link") DevTalks 02
          li.page__list-item
            router-link(to="/posts/01", class="sub-nav__link") DevTalks 01
          li.page__list-item
            router-link(to="/posts/02", class="sub-nav__link") DevTalks 02
          li.page__list-item
            router-link(to="/posts/01", class="sub-nav__link") DevTalks 01
          li.page__list-item
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
