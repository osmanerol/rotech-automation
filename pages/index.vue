<script>
import Slider from '~/components/Slider.vue'
import AppTitle from '~/components/AppTitle.vue'

export default {
  name: 'Home',
  components: {
    Slider,
    AppTitle
  },
  scrollToTop: true,
  head() {
    return {
      titleTemplate: '%s - Anasayfa'
    }
  }
}
</script>

<template>
  <section class="home">
    <slider />
    <b-container>
      <div class="made-container">
        <app-title text="Ne Yapıyoruz ?" />
        <b-row>
          <b-col 
            class="made-item"
            md="4"
            xs="12"
          >
            <h1>Tasarım & Simulasyon</h1>
            <span>Robotlu otomasyon sistemlerinizi devreye almadan önce tasarım ve simülasyonlarını sanal ortamda yaparak performanslarını ortaya koyuyoruz.</span>
          </b-col>
          <b-col 
            class="made-item"
            md="4"
            xs="12"
          >
            <h1>Kurulum & Devreye Alma</h1>
            <span>Robot – Otomasyon tesislerini sahanızda uzman kadromuzla tam zamanında devreye alıyoruz.</span>
          </b-col>
          <b-col 
            class="made-item"
            md="4"
            xs="12"
          >
            <h1>Mühendislik & Danışmanlık</h1>
            <span>Devreye aldığımız otomasyon ve robot sistemlerinin mühendislik çalışmalarını prosesinize tam uyumlu ve esnek bir şekilde gerçekleştiriyoruz.</span>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
.home {
  .made-container {
    .made-item {
      h1 {
        font-weight: 600;
        margin-bottom: 16px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .home {
    .made-container {
      padding-top: 120px;
      padding-bottom: 120px;
      .row {
        padding-top: 30px;
        .made-item {
          h1 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .home {
    .made-container {
      padding-top: 60px;
      padding-bottom: 60px;
      .row {
        .made-item {
          padding-top: 20px;
          h1 {
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>