<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      links: [],
    }
  },
  created () {
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
        name: 'İLETİŞİM',
        path: '/contact'
      },
    ]
  },
}
</script>

<template>
  <b-sidebar
    id="sidebar-backdrop"
    backdrop-variant="dark"
    backdrop
    shadow
    right
  >
    <div class="sidebar-links px-3">
      <ul>
        <li
          v-for="(item, index) in links"
          :key="index"
          class="mb-4"
        >
          <NuxtLink 
            :to="item.path" 
            exact
            sidebar-link   
            class="sidebar-link"
          >
            {{ item.name }}
          </NuxtLink> 
        </li>
      </ul>
    </div>
  </b-sidebar>
</template>

<style lang="scss" scoped>
::v-deep {
  .b-sidebar {
    width: 100%;
    z-index: 1;
    .b-sidebar-header {
      height: 68px;
    }
    .b-sidebar-body {
      .sidebar-links {
        padding-top: 40px;
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            text-align: center;
            .sidebar-link {
              font-weight: 800;
              color: var(--color-black-01);
              opacity: .9;
              text-decoration: none;
              font-size: 28px;
            }
            .nuxt-link-active {
              color: var(--color-blue-01)! important;
            }
          }
        }
      }
    }
  }
}
</style>