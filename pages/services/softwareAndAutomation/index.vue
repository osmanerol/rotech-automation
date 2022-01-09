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
      titleTemplate: '%s | Otomasyon & Yazılım'
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
        text: 'Otomasyon & Yazılım',
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
      image-source="/automation-and-software.jpg" 
    />
    <b-container>
      <div class="breadcrumb-container">
        <b-breadcrumb :items="links" />
      </div>
      <app-title text="Otomasyon & Yazılım" />
      <div class="content">
        <p>Günümüzde otomasyon sistemleri her sektörde hızlı, verimli ve sıfır hata sunan üretim modeli olarak tanımlanmaktadır. Fabrika Otomasyonu konusunda ayrıca tedarikçi konumunda olan Rotech , farklı uygulamalar için robotik sistemler tasarlamakta ve otomasyon entegrasyonunu yine kendi bünyesinde gerçekleştirmektedir. İş akışının belirlenmesi ve robotik sisteminlerin tasarlanmasından sonra yazılım mühendislerimiz ile belirlenen prosesler, plc tabanlı olarak programlanmaktadır.</p>
        <p>Otomasyon Sistemini oluşturan yan parçaların, aparatların, pnömatik ekipmanların ve plc elektronik sistemlerin robotlar ile senkronize şekilde çalışması sağlanırken, multi-tasking (çok yönlü) uygulamalara da esnek çözümler getirilmektedir.</p>
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