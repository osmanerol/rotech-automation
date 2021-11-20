<script>
export default {
  name: 'Banner',
  props: {
    imageSource: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    scssVariables() {
      return {
        '--background-image': `url(${this.imageSource})`
      }
    }
  }
}
</script>

<template>
  <div 
    class="main-banner"
    :style="scssVariables"
  >
    <h1>{{ content }}</h1>  
  </div>
</template>

<style lang="scss" scoped>
.main-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .6;
    top: 0;
    left: 0;
  }
  h1 {
    color: var(--color-white-01);
    z-index: 1;
  }
}

@media screen and (min-width: 768px) {
  .main-banner {
    height: 220px;
  }
}

@media screen and (max-width: 767px) {
  .main-banner {
    height: 160px;
  }
}
</style>