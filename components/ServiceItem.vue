<script>
export default {
  name: 'ServiceItem',
  props: {
    image: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    redirect() {
      this.$router.push(this.to)
    }
  }
}
</script>

<template>
  <div class="service-item" @click="redirect">
    <img 
      :src="image" 
      alt="service-item"
    />
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-item {
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1s;
    -webkit-transition: 1s;
  }
  .title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: var(--color-white-01);
      font-weight: 600;
    }
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      img {
      transform: scale(1.2);
    }
    &::after {
      opacity: .3;
    }
  }
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--color-black-01);
    opacity: .5;
    transition: .6s;
    -webkit-transition: .6s;
  }
}

@media screen and (min-width: 768px) {
  .service-item  {
    margin-top: 30px;
    height: 260px;
    .title {
      h1 {
        font-size: 20px;
      }
    }
    &:hover {
      .title {
        h1 {
          font-size: 22px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .service-item  {
    margin-top: 20px;
    height: 240px;
    .title {
      h1 {
        font-size: 18px;
      }
    }
    &:hover {
      .title {
        h1 {
          font-size: 20px;
        }
      }
    }
  }
}
</style>