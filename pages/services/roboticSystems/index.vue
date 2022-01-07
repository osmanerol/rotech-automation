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
      titleTemplate: '%s | Robotik Sistemler'
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
        text: 'Robotik Sistemler',
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
      image-source="/_nuxt/assets/robotic-systems.jpg" 
    />
    <b-container>
      <div class="breadcrumb-container">
        <b-breadcrumb :items="links" />
      </div>
      <app-title text="Robotik Sistemler" />
      <div class="content">
        <p>Robotik ve otomasyon projelerini büyük bir titizlikle gerçekleştiren Rotech, bu alandaki deneyimi ve bilgi birikimiyle, firmaların isteklerine bağlı olarak her türlü robotik çözüm uygulamasını hayata geçirebilmektedir. Projelerimiz müşterilerimizin istekleri doğrultusunda yoğun bir Ar-Ge sürecinden geçmekte ve çözüm olarak en verimli sistem üzerinde karar verilmektedir.</p>
        <p>Robot ve otomasyon teknolojileri konusunda dünyanın önde gelen endüstri robotu üreticileriyle çalışmaktayız. Çözüm yelpazemizdeki markaların ürün yelpazesiyle tüm taşıma yükü aralıklarını ve robot tiplerini kapsamaktayız. Ayrıca çok sayıda uygulama için uygun kumandalar ve yazılım paketleri ürün portföyümüzü tamamlamaktadır. Tasarım ve Ar-Ge çalışmaları doğrultusunda, en optimal robot seçimi yanında, her amaca özel gripper/tutucu kol tasarımı, plc sistem kontrolleri ve operasyon dizaynları, Rotech bünyesinde  gerçekleştirilmektedir.</p>
        <p>Endüstriyel üretim, otomotiv, gıda, sağlık, elektrik-elektronik ve daha birçok sektöre yönelik robotik çözümler üreten Rotech, tecrübeli kadrosuyla, amaca yönelik robotik otomasyon sistemlerini anahtar teslim gerçekleştirmekte ve devreye alma hizmetlerini sunmaktadır.</p>
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