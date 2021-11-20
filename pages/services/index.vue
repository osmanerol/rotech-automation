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
      image-source="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" 
      />
    <b-container>
      Services
    </b-container>
  </section>
</template>

<style lang="scss" scoped>

</style>