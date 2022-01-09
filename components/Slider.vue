<script>
export default {
  name: 'Slider',
  data() {
    return {
      slideContents: []
    }
  },
  created() {
    this.slideContents = [
      {
        image: '/slider1.jpg',
        caption: 'More technology for the future',
      },
      {
        image: '/slider2.jpg',
        caption: "You want it, We'll do it",
      },
    ]
  }
}
</script>

<template>
  <section class="slider">
    <b-carousel
      id="carousel-fade"
      :interval="3000"
      fade
      indicators
      background="#ababab"
      style="text-shadow: 0px 0px 2px #000"
    >
      <b-carousel-slide
        v-for="(item, index) in slideContents"
        :key="index"
        :caption="item.caption"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100 h-100"
            width="1024"
            height="580"
            :src="item.image"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>

<style lang="scss" scoped>
.slider {
  .carousel {
    .carousel-inner {
      .carousel-item {
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
        img {
          object-fit: cover;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .slider {
    .carousel {
      .carousel-inner {
        .carousel-item {
          height: 520px! important;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .slider {
    .carousel {
      .carousel-inner {
        .carousel-item {
          height: 340px! important;
        }
      }
    }
  }
}
</style>