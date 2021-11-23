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
      image-source="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
    />
    <b-container >
      <div class="corporate-info">
        <app-title text="Hakkımızda" />
        <div class="text-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
        </div>
      </div>
      <div class="corporate-info">
        <app-title text="Vizyonumuz" />
        <div class="text-content">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum quia, reprehenderit obcaecati repellat nisi ipsam delectus, unde voluptatibus nam sunt, tempore tempora facere consequatur commodi veniam molestias itaque dolores!</p>
        </div>
      </div>
      <div class="corporate-info">
        <app-title text="Misyonumuz" />
        <div class="text-content">
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