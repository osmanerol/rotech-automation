<script>
export default {
  name: 'Home',
  scrollToTop: true,
  data() {
    return {
      makes: [],
      partners: [],
      services: []
    }
  },
  head() {
    return {
      titleTemplate: '%s | Anasayfa'
    }
  },
  created() {
    this.makes = [
      {
        title: 'Tasarım & Simulasyon',
        text: 'Robotlu otomasyon sistemlerinizi devreye almadan önce tasarım ve simülasyonlarını sanal ortamda yaparak performanslarını ortaya koyuyoruz.'
      },
      {
        title: 'Kurulum & Devreye Alma',
        text: 'Robot – Otomasyon tesislerini sahanızda uzman kadromuzla tam zamanında devreye alıyoruz.'
      },
      {
        title: 'Mühendislik & Danışmanlık',
        text: 'Devreye aldığımız otomasyon ve robot sistemlerinin mühendislik çalışmalarını prosesinize tam uyumlu ve esnek bir şekilde gerçekleştiriyoruz.'
      },
    ]
    this.services = [
      {
        image: '/robotic-systems.jpg',
        title: 'Robotik Sistemler',
        to: '/services/roboticSystems'
      },
      {
        image: '/automation-and-software.jpg',
        title: 'Otomasyon & Yazılım',
        to: '/services/softwareAndAutomation'
      },
      {
        image: '/custom-machine-production.jpg',
        title: 'Özel Makina İmalatı',
        to: '/services/customMachineProduction'
      },
      {
        image: '/image-processing.jpg',
        title: 'Endüstriyel Görüntü İşleme',
        to: '/services/endustrialImageProcessing'
      },
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
            v-for="(item, index) in makes"
            :key="index"
            class="make-item"
            md="4"
            cols="12"
          >
            <h1 class="mb-2">{{ item.title }}</h1>
            <span>{{ item.text }}</span>
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
            <p class="pt-2">Rotech Automation Ozan Gürsoylar ve Muharrem Gül tarafından gelişen ve değişen dünya teknolojisini müşterilere en iyi şekilde sunmak adına 2021 yılında kurulmuştur. Firmamız robotik, görüntü işleme, yapay zeka, özel makine üretimi, otomasyon ve yazılım alanında hizmet vermektedir.</p>
            <div class="pt-2">
              <NuxtLink 
                to="/corporate"
                class="about-button"
              >
                Kurumsal
              </NuxtLink>
            </div>
          </b-col>
          <b-col
            class="about-item"
            md="6"
            cols="12"
          >
            <img 
              src="/home-corporate.jpg"
              alt="automation-info"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container>
      <div class="services">
        <app-title text="Hizmetlerimiz" />
        <b-row>
          <b-col
            v-for="(item, index) in services"
            :key="index"
            lg="4"
            md="6"
            cols="12"
          >
            <service-item
              :image="item.image"
              :title="item.title"
              :to="item.to"
            />
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container
      v-if="partners.length > 0"
    >
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
  flex: 1;
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
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          overflow: hidden;
          transition: .6s;
          -webkit-transition: .6s;
          img {
            transform: scale(1.05);
            transition: .6s;
            -webkit-transition: .6s;
          }
        }
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
  .services {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .partners {
    padding-bottom: 120px;
  }
}

@media screen and (max-width: 767px) {
  .home {
    .make-container {
      padding-top: 60px;
      padding-bottom: 100px;
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
      padding-bottom: 60px;
      .row {
        .about-item:first-child {
          order: 2;
          margin-top: 30px;
        }
        .about-item:last-child {
          order: 1;
          margin-top: -40px;
        } 
      }
    }
    .services {
      padding-top: 60px;
      padding-bottom: 60px;
    }
    .partners {
      // padding-top: 60px;
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