<script>

export default {
  name: 'Contact',
  scrollToTop: true,
  head() {
    return {
      titleTemplate: '%s | İletişim'
    }
  }
}
</script>

<template>
  <section class="contact">
    <app-banner 
      content="İletişim" 
      image-source="/slider1.jpg" 
      />
    <b-container>
      <div class="contact-info">
        <b-row>
          <b-col
            md="6"
            xs="12"
          >
            <div class="contact-title">
              <app-title text="Bizimle İletişime Geçin" />
              <p class="pt-3 m-0">Otomasyon sistemleriniz ve robotlu endüstriyel tesisleriniz ile ilgili hizmetlerimiz hakkında bilgi ve teklif almak isterseniz aşağıdaki iletişim yollarından bizimle iletişime geçebilirsiniz.</p>
            </div>
            <div class="contact-content pt-3">
              <h1 class="company-name m-0">Rotech Automation, Robot Otomasyon Sistemleri Ticaret ve Sanayi Limited Şirketi</h1>
              <ul class="pt-3">
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
                  <a 
                    href="mailto:info@rotechautomation.com"
                    class="mail-link"
                  >
                    info@rotechautomation.com
                  </a>
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
                </li>
              </ul>
            </div>
          </b-col>
          <b-col
            class="map"
            md="6"
            xs="12"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398614.8319721873!2d27.083787564470807!3d38.69074673628185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b99ac7a65549b7%3A0xdb68e0025a44d76f!2sManisa%20Merkez!5e0!3m2!1str!2str!4v1637430795471!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  flex: 1;
  .contact-info {
    .contact-content {
      .company-name {
        font-size: 15px;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          display: flex;
          flex-direction: row;
          a {
            text-decoration: none;
            color: var(--color-black-01);
          }
          .mail-link {
            &:hover {
              color: var(--color-blue-01);
              text-decoration: underline;
            }
          }
          .b-icon {
            margin-top: 4.3px;
            margin-right: 8px;
          }
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
        .social-icons {
          margin-top: 20px;
          .b-icon {
            font-size: 24px;
            margin-right: 14px;
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
    iframe {
      width: 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  .contact {
    .container {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
}

@media screen and (max-width: 767px) {
  .contact {
    .container {
      padding-top: 30px;
      padding-bottom: 30px;
      .contact-info {
        .map {
          padding-top: 30px;
        }
      }
    }
  }
}
</style>