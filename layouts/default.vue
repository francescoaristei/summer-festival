<template>
  <div class="main-page">
    <the-header />
    <nuxt />
    <page-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import PageFooter from '~/components/PageFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    PageFooter
  },
}
</script>