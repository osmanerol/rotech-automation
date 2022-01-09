<script>
export default {
  name: 'Corporate',
  scrollToTop: true,
  head() {
    return {
      titleTemplate: '%s | Kurumsal'
    }
  }
}
</script>

<template>
  <section class="corporate">
    <app-banner 
      content="Kurumsal" 
      image-source="/home-corporate.jpg" 
    />
    <b-container >
      <div class="corporate-info">
        <app-title text="Hakkımızda" />
        <div class="text-content">
          <p>Rotech Automation Ozan Gürsoylar ve Muharrem Gül tarafından gelişen ve değişen dünya teknolojisini müşterilere en iyi şekilde sunmak adına 2021 yılında kurulmuştur. Firmamız robotik, görüntü işleme , yapay zeka , özel makine üretimi , otomasyon ve yazılım alanında hizmet vermektedir.</p>
        </div>
      </div>
      <div class="corporate-info">
        <app-title text="Vizyonumuz" />
        <div class="text-content">
          <p>En başta ülkemizin dışa bağımlı olduğu teknoloji alanlarında, dışa bağımlılığı kesmek yerli üretim sistemler tasarlayıp hayata geçirmek.</p>
          <p>Değişen dünya teknolojisini en basit şekilde müşterilere sunmak.</p>
          <p>Düzenli ve azimli çalışma anlayışı üstlenilen sorumlulukların zamanında  yerine getirilmesi, müşteri memnuniyeti.</p>
        </div>
      </div>
      <div class="corporate-info">
        <app-title text="Misyonumuz" />
        <div class="text-content">
          <p>Farklı endüstri alanlardaki çeşitliliğe ve standartlara uygun olarak, standart veya terzi usulü olrarak özel tasarlanmış; robotik ve mekatronik sistemler ve buna bağlı üretim tesisleri geliştirmek ve entegre etmek.</p>
          <p>Müşterilerimizin sıkıntılı süreçlerinde dar boğazdan kurtaracak sistemler ile fayda ve avantaj sağlamak.</p>
          <p>Çözüm odakla ekonomik sistemler üretmek.</p>
        </div>
      </div>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
.corporate {
  flex: 1;
  .corporate-info {
    .text-content {
      p {
        margin-bottom: 6px;
        font-size: 1rem;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .corporate {
    .container {
      padding-top: 60px;
      padding-bottom: 60px;
      .corporate-info {
        &:not(:last-child) {
          padding-bottom: 30px;
        }
        .text-content {
          padding-top: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .corporate {
    .container {
      padding-top: 30px;
      padding-bottom: 30px;
      .corporate-info {
        &:not(:last-child) {
          padding-bottom: 15px;
        }
        .text-content {
          padding-top: 10px;
        }
      }
    }
  }
}
</style>