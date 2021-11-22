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
      /*
      {
        image: 'https://images.unsplash.com/photo-1581093803931-46e730e7622e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        caption: 'Header 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse culpa cum exercitationem ea, nisi atque obcaecati, quo nostrum ab id dignissimos aspernatur ratione, at delectus. Esse voluptatem sed eligendi.'
      },
      */
      {
        image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption: 'Header 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse culpa cum exercitationem ea, nisi atque obcaecati, quo nostrum ab id dignissimos aspernatur ratione, at delectus. Esse voluptatem sed eligendi.'
      },
      {
        image: 'https://images.unsplash.com/photo-1593106410302-2db73598ccf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGF1dG9tYXRpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        caption: 'Header 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse culpa cum exercitationem ea, nisi atque obcaecati, quo nostrum ab id dignissimos aspernatur ratione, at delectus. Esse voluptatem sed eligendi.'
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum. Tenetur, earum! Fugiat hic quam sapiente tenetur iure, sint laborum facilis. Ullam, rem dolore sint odit consectetur quo dolorem ipsa!</p>
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