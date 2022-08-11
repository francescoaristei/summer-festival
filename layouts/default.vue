<template>
  <div class="main-page">
    <the-nav-bar />
    <nuxt />
    <page-footer />
  </div>
</template>

<script>
import TheNavBar from '~/components/TheNavBar.vue'
import PageFooter from '~/components/PageFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheNavBar,
    PageFooter
  },
}
</script>