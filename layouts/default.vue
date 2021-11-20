<script>
import AppHeader from '../components/AppHeader.vue'
import AppSidebar from '../components/AppSidebar.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'Default',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  },
  data() {
    return {
      isTopControl: true,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollControl)
  },
  methods: {
    scrollControl() {
      if(window.pageYOffset === 0) {
        this.isTopControl = true;
      }
      else {
        this.isTopControl = false;
      }
    }
  }
}
</script>

<template>
  <div class="app">
    <app-header />
    <app-sidebar />
    <main
      :class="{ 'isMainTop' : isTopControl }"
    >
      <Nuxt />
    </main>
    <app-footer />
  </div>
</template>


<style lang="scss" scoped>
.app {
  main {
    transition: .5s all;
    min-height: calc(100vh - 200px);
  }
}

@media screen and (min-width: 768px) {
  .app {
    .isMainTop {
      margin-top: 90px! important;
    }
    main {
      margin-top: 70px;
    }
  }
}

@media screen and (max-width: 767px) {
  .app {
    .isMainTop {
      margin-top: 70px! important;
    }
    main {
      margin-top: 60px;
    }
  }
}
</style>