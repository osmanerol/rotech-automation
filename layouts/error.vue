<script>
export default {
  name: 'Error'
}
</script>

<template>
  <b-container class="error">
    <div class="error-items">
      <h1>404</h1>
      <h4>Aradığınız sayfa bulunamadı.</h4>
      <p>Sayfa kaldırılmış veya adresi değiştirilmiş olabilir.</p>
      <div class="go-home-button">
        <NuxtLink to="/">
          Anasayfaya Dön
        </NuxtLink>
      </div>
    </div>
  </b-container>
</template>

<style lang="scss" scoped>
.error {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .error-items {
    text-align: center;
    h1 {
      font-weight: 800;
    }
    h4 {
      font-weight: 700;
      margin-bottom: 20px;
    }
    p {
      font-weight: 500;
      margin-bottom: 20px;
    }
    .go-home-button {
      padding: 10px 20px;
      a {
        background-color: var(--color-blue-01);
        color: var(--color-white-01);
        text-decoration: none;
        padding: 10px 20px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .error {
    .error-items {
      h1 {
        font-size: 100px;
      }
      h4 {
        font-size: 50px;
      }
      p {
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .error {
    .error-items {
      h1 {
        font-size: 80px;
      }
      h4 {
        font-size: 30px;
      }
    }
  }
}
</style>