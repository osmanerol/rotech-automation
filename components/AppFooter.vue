<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <footer>
    <b-container>
      <b-row>
        <b-col
          class="footer-item"
          md="4"
          xs="12"
        >
          <h1>Hakkımızda</h1>
          <div class="description">
            <p>Rotech Automation, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iure amet rem debitis labore culpa, reiciendis ex temporibus nam optio, consequatur rerum eligendi dolores suscipit omnis voluptates ab explicabo eos.</p>
          </div>
        </b-col>
        <b-col
          class="footer-item"
          md="4"
          xs="12"
        >
          <h1>Kısayol Bağlantıları</h1>
          <div class="description">
            <ul>
              <li>
                <b-icon icon="chevron-double-right" />
                <NuxtLink to='/'>Anasayfa</NuxtLink>
              </li>
              <li>
                <b-icon icon="chevron-double-right" />
                <NuxtLink to='/corporate'>Kurumsal</NuxtLink>
              </li>
              <li>
                <b-icon icon="chevron-double-right" />
                <NuxtLink to='/services'>Hizmetler</NuxtLink>
              </li>
              <li>
                <b-icon icon="chevron-double-right" />
                <NuxtLink to='/products'>Ürünler</NuxtLink>
              </li>
              <li>
                <b-icon icon="chevron-double-right" />
                <NuxtLink to='/contact'>İletişim</NuxtLink>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col
          class="footer-item"
          md="4"
          xs="12"
        >
          <h1>İletişim Bilgilerimiz</h1>
          <div class="description contact-info">
            <ul>
              <li>
                <b-icon icon="geo-alt-fill" />
                <span>Merkez Caddesi Merkez Sokak No: 20 Yunusemre / Manisa</span>
              </li>
              <li>
                <b-icon icon="telephone-fill" />
                <span>0850 123 12 13</span>
              </li>
              <li>
                <b-icon icon="envelope-fill" />
                <a href="mailto:info@rotechautomation.com">info@rotechautomation.com</a>
              </li>
              <li class="social-icons">
                <a 
                  href="https://www.facebook.com" 
                  class="facebook-icon"
                >
                  <b-icon icon="facebook" />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  class="instagram-icon"
                >
                  <b-icon icon="instagram" />
                </a>
                <a 
                  href="https://www.linkedin.com"
                  class="linkedin-icon"
                >
                  <b-icon icon="linkedin" />
                </a>
                <a
                  href="https://www.youtube.com"
                  class="youtube-icon"
                >
                  <b-icon icon="youtube" />
                </a>
                <a
                  href="mailto:info@rotechautomation.com"
                  class="mail-icon"
                >
                  <b-icon icon="envelope-fill" />
                </a>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="copyright">
      <span>Copyright 2021 © Tüm hakları saklıdır.</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--color-ui-01);
  position: relative;
  .row {
    .footer-item {
      h1 {
        font-weight: 600;
        color: var(--color-white-01);
        position: relative;
        margin-bottom: 12px;
        &::after {
          position: absolute;
          content: '';
          width: 100px;
          height: 1.6px;
          background-color: var(--color-gray-01);
          left: 0;
          bottom: -10px;
        }
      }
      .description {
        color: var(--color-gray-01);
        font-size: 14px;
        p {
          margin-bottom: 0;
        }
        ul {
          padding-left: 0px;
          list-style: none;
          margin: 0;
          li {
            a {
              text-decoration: none;
              color: var(--color-gray-01);
            }
            .b-icon {
              margin-right: 8px;
            }
          }
          .social-icons {
            margin-top: 20px;
            .b-icon {
              font-size: 24px;
            }
            .facebook-icon, .instagram-icon, .linkedin-icon, .mail-icon {
              &:hover {
                .b-icon {
                  color: #3b5998;
                }
              }
            }
            .youtube-icon {
              &:hover {
                .b-icon {
                  color: #cd201f;
                }
              }
            }
          }
        }
      }
    }
  }
  .copyright {
    color: var(--color-white-01);
    text-align: center;
    position: absolute;
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  footer {
    padding-top: 100px;
    padding-bottom: 100px;
    .row {
      .footer-item {
        h1 {
          font-size: 17px;
        }
        .description {
          padding-top: 10px;
          ul {
            li {
              &:not(:last-child) {
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
    .copyright {
      bottom: 20px;
    }
  }
}

@media screen and (max-width: 767px) {
  footer {
    padding-top: 50px;
    padding-bottom: 50px;
    .row {
      .footer-item {
        h1 {
          font-size: 16px;
        }
        .description {
          padding-top: 10px;
          ul {
            li {
              &:not(:last-child) {
                margin-bottom: 6px;
              }
            }
          }
        }
        &:not(:first-child) {
          margin-top: 20px;
        }
      }
    }
    .copyright {
      bottom: 12px;
    }
  }
}
</style>