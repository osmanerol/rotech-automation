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
  data() {
    return {
      partners: []
    }
  },
  head() {
    return {
      titleTemplate: '%s - Anasayfa'
    }
  },
  created() {
    this.partners = [
      'https://www.robomaker.com.tr/uploads/f-1_op.jpg',
      'https://www.robomaker.com.tr/uploads/f-2_op.jpg',
      'https://www.robomaker.com.tr/uploads/f-3_op.jpg',
      'https://www.robomaker.com.tr/uploads/f-4_op.jpg',
    ]
  }
}
</script>

<template>
  <section class="home">
    <slider />
    <b-container>
      <div class="make-container">
        <app-title text="Ne Yapıyoruz ?" />
        <b-row>
          <b-col 
            class="make-item"
            md="4"
            cols="12"
          >
            <h1 class="mb-2">Tasarım & Simulasyon</h1>
            <span>Robotlu otomasyon sistemlerinizi devreye almadan önce tasarım ve simülasyonlarını sanal ortamda yaparak performanslarını ortaya koyuyoruz.</span>
          </b-col>
          <b-col 
            class="make-item"
            md="4"
            cols="12"
          >
            <h1 class="mb-2">Kurulum & Devreye Alma</h1>
            <span>Robot – Otomasyon tesislerini sahanızda uzman kadromuzla tam zamanında devreye alıyoruz.</span>
          </b-col>
          <b-col 
            class="make-item"
            md="4"
            cols="12"
          >
            <h1 class="mb-2">Mühendislik & Danışmanlık</h1>
            <span>Devreye aldığımız otomasyon ve robot sistemlerinin mühendislik çalışmalarını prosesinize tam uyumlu ve esnek bir şekilde gerçekleştiriyoruz.</span>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <div class="about-me-container">
      <b-container>
        <b-row>
          <b-col
            class="about-item"
            md="6"
            cols="12"
          >
            <app-title text="Rotech Automation Hakkında" />
            <p class="pt-2">Rotech Automation, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure amet rem debitis labore culpa, reiciendis ex temporibus nam optio, consequatur rerum eligendi dolores suscipit omnis voluptates ab explicabo eos.</p>
            <p>Rotech Automation, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure amet rem debitis labore culpa, reiciendis ex temporibus nam optio, consequatur rerum eligendi dolores suscipit omnis voluptates ab explicabo eos.</p>
            <NuxtLink 
              to="/corporate"
              class="about-button mt-2"
            >
              Hakkımızda
            </NuxtLink>
          </b-col>
          <b-col
            class="about-item"
            md="6"
            cols="12"
          >
            <img 
              src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80"
              alt="automation-info"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <div class="partners">
        <app-title text="Partnerlerimiz" />
        <b-row class="pt-4">
          <b-col 
            v-for="(item, index) in partners"
            :key="index"
            class="partner-item"
            md="3" 
            cols="6"
          >
            <img :src="item" alt="partners-info">
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
.home {
  .make-container {
    .make-item {
      h1 {
        font-weight: 600;
        margin-bottom: 16px;
      }
    }
  }
  .about-me-container {
    background-color: var(--color-ui-01);
    color: var(--color-white-01);
    .row {
      .about-item {
        position: relative;
        img {
          width: 100%;
        }
        .about-button {
          background-color: var(--color-blue-01);
          color: var(--color-white-01);
          padding: 10px 20px;
          font-weight: 600;
          text-decoration: none;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .partners {
    .row {
      .partner-item {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .home {
    .make-container {
      padding-top: 120px;
      padding-bottom: 120px;
      .row {
        padding-top: 30px;
        .make-item {
          h1 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 16px;
          }
        }
      }
    }
  }
  .about-me-container {
    padding-top: 120px;
    padding-bottom: 120px;
    .row {
      .about-item {
        img {
          position: absolute;
          top: -180px;
          z-index: 1;
        }
      }
    }
  }
  .partners {
    padding-top: 120px;
    padding-bottom: 120px;
  }
}

@media screen and (max-width: 767px) {
  .home {
    .make-container {
      padding-top: 60px;
      padding-bottom: 60px;
      .row {
        .make-item {
          padding-top: 20px;
          h1 {
            font-size: 20px;
          }
        }
      }
    }
    .about-me-container {
      padding-top: 60px;
      padding-bottom: 60px;
      .row {
        .about-item:last-child {
          margin-top: 30px;
        } 
      }
    }
    .partners {
      padding-top: 60px;
      padding-bottom: 60px;
      .row {
        .partner-item {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>