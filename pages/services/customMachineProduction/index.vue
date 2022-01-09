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
      titleTemplate: '%s | Özel Makina İmalatı'
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
        text: 'Özel Makina İmalatı',
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
      image-source="/custom-machine-production.jpg" 
    />
    <b-container>
      <div class="breadcrumb-container">
        <b-breadcrumb :items="links" />
      </div>
      <app-title text="Özel Makina İmalatı" />
      <div class="content">
        <p>Müşterilerimizin operasyonlarında ihtiyaç duyduklarını ve verimliliklerini arttıracak özel uygulamalara yönelik projeler için Rotech bünyesinde hem entegrasyon hem de sıfırdan tasarım, üretim ve otomasyon (PLC ve yazılım) hizmeti verilmektedir.</p>
        <p>Bu kapsamda prototip üretim atölyemizde projede kullanılacak parçalar üretilmekte ve testleri yapılmaktadır. Bir sonraki aşamada otomasyon için gerekli olacak yazılım ve platform tasarlanıp, sistemin devreye alması gerçekleştirilmektedir. Firmamız tarafından üretilen bütün makinalar alanında uzman kadromuz tarafından yapılıp 7\24 teknik destek anlayışı ile siz değerli müşterilerimize hizmet vermekteyiz.</p>
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