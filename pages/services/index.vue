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
        image: 'https://images.unsplash.com/photo-1589320011103-48e428abcbae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Üretim ve Montaj Hattı',
        to: '/services/productionAndMontage'
      },
      {
        image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Yazılım & Otomasyon',
        to: '/services/softwareAndAutomation'
      },
      {
        image: 'https://images.unsplash.com/photo-1538080204498-afe921550d75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Özel Makina İmalatı',
        to: '/services/customMachineProduction'
      },
      {
        image: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'AGV Sistemleri',
        to: '/services/agvSystems'
      },
      {
        image: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Endüstriyel Görüntü İşleme',
        to: '/services/endustrialImageProcessing'
      },
      {
        image: 'https://images.unsplash.com/photo-1535923430552-0ce3cd477cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29udmV5b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Konveyör Sistemleri',
        to: '/services/conveyorSystems'
      },
    ]
  }
}
</script>

<template>
  <section class="services">
    <app-banner 
      content="Hizmetler" 
      image-source="https://images.unsplash.com/photo-1543967708-2418d2e7748c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
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