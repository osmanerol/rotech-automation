<script>
import AppBanner from '~/components/AppBanner.vue'

export default {
  name: 'Products',
  components: {
    AppBanner
  },
  scrollToTop: true,
  head() {
    return {
      titleTemplate: '%s - Ürünler'
    }
  }
}
</script>

<template>
  <section class="products">
    <app-banner 
      content="Ürünler" 
      image-source="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80" 
      />
    <b-container>
      Products
    </b-container>
  </section>
</template>

<style lang="scss" scoped>

</style>