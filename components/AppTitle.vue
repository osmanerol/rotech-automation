<script>
export default {
  name: 'Banner',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <h1 class="main-title">{{ text }}</h1>  
</template>

<style lang="scss" scoped>
.main-title {
  font-weight: 700;
  position: relative;
  margin-bottom: 13px;
  text-transform: uppercase;
  &::after {
    position: absolute;
    content: '';
    width: 100px;
    height: 2.4px;
    background-color: var(--color-blue-01);
    left: 0;
    bottom: -10px;
  }
}

@media screen and (min-width: 768px) {
  .main-title {
    font-size: 24px;
  }
}

@media screen and (max-width: 767px) {
  .main-title {
    font-size: 20px;
  }
}
</style>