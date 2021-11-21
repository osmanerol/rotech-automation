<script>
export default {
  name: 'Default',
  data() {
    return {
      isTopControl: true,
      showMatrix: true,
    }
  },
  created() {
    setTimeout(() => {
      this.showMatrix = false
    }, 4000)
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
    <transition-group 
      name="fade" 
      class="transition"
    >
      <matrix 
        v-if="showMatrix" 
        key="matrix" 
      />
      <div 
        v-if="!showMatrix" 
        key="template" 
        class="template"
      >
        <app-header />
        <app-sidebar />
        <main
          :class="{ 'isMainTop' : isTopControl }"
        >
          <Nuxt />
        </main>
        <app-footer />
      </div>
    </transition-group>
  </div>
</template>


<style lang="scss" scoped>
.app {
  main {
    transition: .5s all;
    min-height: calc(100vh - 200px);
    display: flex;
  }
  .transition {
    .template {
      position: absolute;
      top: 0;
      width: 100%;
    }
    .fade-enter {
      transform: translatex(100%);
      opacity: 0;
    }
    .fade-enter-to {
      transform: translatex(0);
      opacity: 1;
    }
    .fade-leave-to {
      transform: translatex(-100%);
      opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
      transition: 2s;
    }
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