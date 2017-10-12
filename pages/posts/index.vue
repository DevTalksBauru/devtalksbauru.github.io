<template lang="pug">
  .page
    article.article
      aside.sidebar.sidebar--one
      section.section.section--one
        h1.section__title
          span.section__block Talks
        ul
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
