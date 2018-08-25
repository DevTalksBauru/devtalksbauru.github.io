<template lang="pug">
  .page
    section.page__section.page__section--talks
      aside.page__sidebar.page__sidebar--talks
      article.page__content.page__content--talks
        router-link(to="/posts", class="post__link")
          svg(width="24", height="21", viewbox="0 0 24 21", fill="none", xmlns="http://www.w3.org/2000/svg")
            path#Vector(d="M22.6509 8.39146L22.6884 8.39996H6.62869L11.6773 3.14852C11.9245 2.89213 12.0601 2.54482 12.0601 2.18029C12.0601 1.81576 11.9245 1.47087 11.6773 1.21388L10.8917 0.398147C10.6447 0.141761 10.3155 -1.08155e-08 9.96449 -1.08155e-08C9.61327 -1.08155e-08 9.28391 0.140749 9.03688 0.397134L0.382639 9.37852C0.134639 9.63592 -0.000970382 9.97878 5.22758e-06 10.3435C-0.000970382 10.7103 0.134639 11.0533 0.382639 11.3103L9.03688 20.2925C9.28391 20.5487 9.61308 20.6897 9.96449 20.6897C10.3155 20.6897 10.6447 20.5485 10.8917 20.2925L11.6773 19.4768C11.9245 19.2208 12.0601 18.879 12.0601 18.5144C12.0601 18.1501 11.9245 17.8263 11.6773 17.5701L6.57171 12.2893H22.6689C23.3922 12.2893 24 11.6422 24 10.8919V9.73819C24 8.98787 23.3742 8.39146 22.6509 8.39146Z", fill="white")

        .page__post.post
          slot(name="title")
            h2 Post Title

          slot(name="date")
            h4 Date

          hr.post__divider

          slot(name="description")
            p Description

          ul
            slot(name="slides")
              a(:href="href")
            slot(name="time")
              li Photos
            slot(name="speakerName")
              li 🗣 Speaker Name
            slot(name="speakerBio")
              li ⚽️ Speaker Bio
            slot(name="location")
              li 🗺 Location
</template>

<script>
export default {
  name: 'header',

  props: {
    a: {
      type: String,
      href: 'href'
    }
  }
}
</script>
