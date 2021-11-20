<script>
export default {
  name: 'Header',
  data() {
    return {
      isTopControl: true,
      links: []
    }
  },
  created() {
    this.links = [
      {
        name: 'ANASAYFA',
        path: '/'
      },
      {
        name: 'KURUMSAL',
        path: '/corporate'
      },
      {
        name: 'HİZMETLER',
        path: '/services'
      },
      {
        name: 'ÜRÜNLER',
        path: '/products'
      },
      {
        name: 'İLETİŞİM',
        path: '/contact'
      },
    ]
  },
  mounted() {
    window.addEventListener('scroll', this.scrollControl)
  },
  methods: {
    scrollControl() {
      if(window.pageYOffset === 0) {
        this.isTopControl = true;
      }
      else {
        this.isTopControl = false;
      }
    }
  }
}
</script>

<template>
  <header>
    <b-navbar 
      fixed="top"
      :class="{ 'isHeaderTop' : isTopControl }"
    >
      <b-container>
        <b-navbar-brand to="/">
          ROTECH AUTOMATION
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto d-lg-flex d-none">
          <b-nav-item
            v-for="(item, index) in links"
            :key="index"
            :to="item.path"
            exact
          >
            {{ item.name }}
          </b-nav-item>
        </b-navbar-nav>
        <div class="ml-auto toggle-drawer d-lg-none d-block">
          <b-icon 
            v-b-toggle="'sidebar-backdrop'"
            icon="list"
            class="menu-icon"
          />
        </div>
      </b-container>
    </b-navbar>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  .isHeaderTop {
    box-shadow: none! important;
  }
  .navbar {
    transition: .5s all;
    background-color: var(--color-white-01);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    &-brand {
      color: var(--color-black-01);
      font-weight: 800;
      &:hover, &:focus {
        color: var(--color-black-01);
      }
    }
    .navbar-nav {
      .nav-item {
        .nav-link {
          color: var(--color-black-01);
          font-size: .8rem;
          font-weight: 700;
          padding: 10px 20px;
        }
        .nuxt-link-active {
          background-color: var(--color-blue-01)! important;
          color: var(--color-white-01)! important;
        }
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
    .toggle-drawer {
      .menu-icon {
        font-size: 26px! important;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  header {
    .isHeaderTop {
      height: 90px! important;
    }
    .navbar {
      height: 70px;
    }
  }
}

@media screen and (max-width: 767px) {
  header {
    .isHeaderTop {
      height: 70px! important;
    }
    .navbar {
      height: 60px;
    }
  }
}
</style>