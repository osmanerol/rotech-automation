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
        image: 'https://static.magento.com/sites/default/files8/DB_Shenker_Industrial_Automation_Magento_Blog.jpg',
        caption: 'Header 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse culpa cum exercitationem ea, nisi atque obcaecati, quo nostrum ab id dignissimos aspernatur ratione, at delectus. Esse voluptatem sed eligendi.'
      },
      {
        image: 'https://www.airtract.com/Media/Article/ArticleImages/552d32aa-3-201904021057543369.jpg',
        caption: 'Header 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse culpa cum exercitationem ea, nisi atque obcaecati, quo nostrum ab id dignissimos aspernatur ratione, at delectus. Esse voluptatem sed eligendi.'
      },
      {
        image: 'https://industrytoday.com/wp-content/uploads/2018/11/robot-automation-2.jpg',
        caption: 'Header 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse culpa cum exercitationem ea, nisi atque obcaecati, quo nostrum ab id dignissimos aspernatur ratione, at delectus. Esse voluptatem sed eligendi.'
      },
    ]
  }
}
</script>

<template>
  <section class="slider">
    <!--
    <b-carousel
      id="carousel-fade"
      :interval="3000"
      fade
      img-height="1000"
      indicators
      background="#ababab"
      style="text-shadow: 0px 0px 2px #000"
    >
      <b-carousel-slide
        v-for="(item, index) in slideContents"
        :key="index"
        :caption="item.caption"
        :text="item.text"
        :img-src="item.image"
      ></b-carousel-slide>
    </b-carousel>
    -->
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
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .slider {
    .carousel {
      .carousel-inner {
        .carousel-item {
          height: 540px! important;
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