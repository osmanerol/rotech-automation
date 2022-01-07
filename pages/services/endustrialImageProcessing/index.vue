<script>
export default {
  name: 'Services',
  scrollToTop: true,
  data() {
    return {
      links: []
    }
  },
  head() {
    return {
      titleTemplate: '%s | Endüstriyel Görüntü İşleme'
    }
  },
  created() {
    this.links = [
      {
        text: 'Anasayfa',
        to: '/'
      },
      {
        text: 'Hizmetler',
        to: '/services'
      },
      {
        text: 'Endüstriyel Görüntü İşleme',
        active: true
      }
    ]
  }
}
</script>

<template>
  <section class="sub-service">
    <app-banner 
      content="Hizmetler" 
      image-source="/_nuxt/assets/image-processing.jpg" 
    />
    <b-container>
      <div class="breadcrumb-container">
        <b-breadcrumb :items="links" />
      </div>
      <app-title text="Endüstriyel Görüntü İşleme" />
      <div class="content">
        <p>Otomasyonlu endüstri alanlarımızda endüstriyel görüntü işleme çağımızda giderek daha fazla önem kazanmaktadır. Teknolojik sistemler birçok görev için kamera sistemi kullanılmasına imkân sağlamakta olup tesislerinizin güvenilirliği ve işlevselliği açısında önemli derecede artı katmaktadır.</p>
        <p>Endüstriyel görüntü işleme, çoğunlukla üretim hattına kurulan (birkaç) özel kamera veya görüntüleme sisteminin kullanımına dayanır. Endüstriyel görüntü işlemenin ikinci zorunlu bileşeni, bu görüntüyü anlaşılabilir hale getirip gerekli sistem ile adaptasyonudur.</p>
        <p>Endüstriyel görüntü işleme, çoğunlukla üretim hattına kurulan (birkaç) özel kamera veya görüntüleme sisteminin kullanımına dayanır. Endüstriyel görüntü işlemenin ikinci zorunlu bileşeni, bu görüntüyü anlaşılabilir hale getirip gerekli sistem ile adaptasyonudur.</p>
      </div>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
.sub-service {
  flex: 1;
}

@media screen and (min-width: 768px) {
  .sub-service {
    .container {
      padding-top: 40px;
      padding-bottom: 60px;
      .content {
        margin-top: 30px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .sub-service {
    .container {
      padding-top: 20px;
      padding-bottom: 30px;
      .content {
        margin-top: 20px;
      }
    }
  }
}
</style>