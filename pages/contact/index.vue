<script>
import AppBanner from '~/components/AppBanner.vue'

export default {
  name: 'Contact',
  components: {
    AppBanner
  },
  scrollToTop: true,
  head() {
    return {
      titleTemplate: '%s - İletişim'
    }
  }
}
</script>

<template>
  <section class="contact">
    <app-banner 
      content="İletişim" 
      image-source="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      />
    <b-container>
      Contact
    </b-container>
  </section>
</template>

<style lang="scss" scoped>

</style>