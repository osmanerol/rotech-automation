<script>
export default {
  name: 'Services',
  scrollToTop: true,
  data() {
    return {
      services: []
    }
  },
  head() {
    return {
      titleTemplate: '%s | Hizmetler'
    }
  },
  created() {
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
  <section class="services">
    <app-banner 
      content="Hizmetler" 
      image-source="/services-home.jpg" 
      />
    <b-container>
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
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
.services {
  flex: 1;
}

@media screen and (min-width: 768px) {
  .services {
    .container {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
}

@media screen and (max-width: 767px) {
  .services {
    .container {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
}
</style>