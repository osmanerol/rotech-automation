<script>
export default {
  name: 'ScrollToTop',
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <div class="scroll-to-top">
    <div 
      class="icon"
      @click="scrollTop"
    >
      <b-icon
        icon="arrow-up"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.scroll-to-top {
  position: relative;
  .icon {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: var(--color-blue-01);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    transition: .6s;
    .b-icon {
      color: var(--color-white-01);
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
}

@media screen and (min-width: 768px) {
  .scroll-to-top {
    .icon {
      bottom: 30px;
      right: 30px;
      width: 46px;
      height: 46px;
    }
  }
}

@media screen and (max-width: 767px) {
  .scroll-to-top {
    .icon {
      bottom: 15px;
      right: 15px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>