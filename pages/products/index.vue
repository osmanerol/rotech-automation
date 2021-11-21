<script>
export default {
  name: 'Products',
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
      image-source="https://images.unsplash.com/photo-1593106410302-2db73598ccf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGF1dG9tYXRpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
    />
    <b-container>
      Products
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
.products {
  flex: 1;
}

@media screen and (min-width: 768px) {
  .products {
    .container {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
}

@media screen and (max-width: 767px) {
  .products {
    .container {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>