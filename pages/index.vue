<template lang="pug">
  .container
    h1 Dev Talks BR 🇧🇷
    div
      img(src="~assets/logo.png")
</template>

<script>
import DtHeader from '~/components/Header'
import DtFooter from '~/components/Footer'

export default {
  name: 'home',

  components: { DtHeader, DtFooter }
}
</script>
