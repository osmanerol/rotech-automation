<script>
import AppBanner from '~/components/AppBanner.vue'
import AppTitle from '~/components/AppTitle.vue'

export default {
  name: 'Corporate',
  components: {
    AppBanner,
    AppTitle
  },
  scrollToTop: true,
  head() {
    return {
      titleTemplate: '%s - Kurumsal'
    }
  }
}
</script>

<template>
  <section class="corporate">
    <app-banner 
      content="Kurumsal" 
      image-source="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
    />
    <b-container>
      <div class="text-container pt-5">
        <app-title text="Hakkımızda" />
        <div class="text-content mt-4">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
        </div>
      </div>
      <div class="text-container pt-5">
        <app-title text="Vizyonumuz" />
        <div class="text-content mt-4">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
        </div>
      </div>
      <div class="text-container py-5">
        <app-title text="Misyonumuz" />
        <div class="text-content mt-4">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
        </div>
      </div>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
.corporate {
  .text-container {
    .text-content {
      p {
        margin-bottom: 6px;
        font-size: 1rem;
      }
    }
  }
}
</style>