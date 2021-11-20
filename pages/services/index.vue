<script>
import AppBanner from '~/components/AppBanner.vue'

export default {
  name: 'Services',
  components: {
    AppBanner
  },
  scrollToTop: true,
  head() {
    return {
      titleTemplate: '%s - Hizmetler'
    }
  }
}
</script>

<template>
  <section class="services">
    <app-banner 
      content="Hizmetler" 
      image-source="https://images.unsplash.com/photo-1543967708-2418d2e7748c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
      />
    <b-container>
      Services
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .services {
    .container {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
}

@media screen and (max-width: 767px) {
  .services {
    .container {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>