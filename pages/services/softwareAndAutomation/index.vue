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
      titleTemplate: '%s | Yazılım & Otomasyon'
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
        text: 'Yazılım & Otomasyon',
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
      image-source="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
    />
    <b-container>
      <div class="breadcrumb-container">
        <b-breadcrumb :items="links" />
      </div>
      <app-title text="Yazılım & Otomasyon" />
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nobis facere at corporis harum animi enim nihil quasi ea molestiae quas, ratione molestias? Quidem eos iure et dignissimos placeat dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nulla illum, eos eum illo deserunt eaque id quia fugiat suscipit, maxime, quae nihil officiis. Eligendi iusto laudantium mollitia corrupti ex. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum harum magni libero quaerat consectetur, quisquam dolor laborum quibusdam tenetur ducimus sapiente atque! Soluta quasi veritatis, illo quae ipsam quam voluptatibus.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo placeat illum voluptatum? Laborum velit, temporibus voluptates mollitia impedit aliquam ducimus quisquam, repellendus soluta voluptatum sapiente corporis a ipsum cumque corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio officia laudantium, recusandae sit facere ducimus deleniti soluta dicta modi minus hic error nam libero eligendi inventore deserunt! Quibusdam, porro.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tempore ipsam a quos placeat molestiae et quibusdam, minus sapiente reprehenderit doloribus libero temporibus ratione earum debitis perspiciatis architecto laborum ea?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo placeat illum voluptatum? Laborum velit, temporibus voluptates mollitia impedit aliquam ducimus quisquam, repellendus soluta voluptatum sapiente corporis a ipsum cumque corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio officia laudantium, recusandae sit facere ducimus deleniti soluta dicta modi minus hic error nam libero eligendi inventore deserunt! Quibusdam, porro.</p>
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
        margin-top: 20px;
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