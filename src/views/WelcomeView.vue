<template>
  <div class="welcome">
<!--    Nav-->
    <nav-bar class="nav"></nav-bar>

<!--    Content-->
    <div class="content">
<!--      left-->
      <div class="left">
        <div data-aos="fade-up">
          <div class="title">Design with Data 2023 Student Showcase</div>
          <div class="text description">
            Design with Data is a course taught as part of the Design Informatics Postgraduate programme at the University of Edinburgh.
            This year, the course is structured into two cohorts: Fashion Informatics, lead by Lynne Craig with course tutors Alexandre Colle and Patrick White; and Designing Ecologies, lead by Dr Larissa Pschetz, with course tutors Dr Asad Khan and Brian Proudfoot.
            Under the curatorial lead of Dr Patricia Wu Wu, students have created a series of responses to explore ‘data-as-a-material’, showcased as part of the Edinburgh Science Festival. The works question more than human and under-represented "voices" in data collection or seek to examine ways in which we could adorn our human selves through worn-data interfaces, ranging from interactive artefacts, data physicalisations, climate-focused games, to data-driven storytelling and beyond.
            <br/>
            <br/>
            The student showcase takes place from 1-7 April (10am - 4pm), at Inspace, 1 Crichton St, Newington, Edinburgh EH8 9AB. For directions to the venue, please see <a href="" id="map-link">the campus map</a>. <!-- todo link -->
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title catalog">Exhibition Catalog</div>
          <!--    todo link-->
          <div class="text pdf-link">PDF Download</div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title sponsor">Sponsor</div>
          <div>
            <a href="https://www.sciencefestival.co.uk/" target="_blank">
              <img :src="Sponsor1" alt="sponsor-1" class="sponsor-img" />
            </a>
            <a href="https://inspace.ed.ac.uk/" target="_blank">
              <img :src="Sponsor2" alt="sponsor-2" class="sponsor-img" />
            </a>
          </div>
        </div>


        <div data-aos="fade-up">
          <div class="sub-title social-media">Social Media</div>
          <div class="text social-media-link">
            <!--          todo link?-->
            <div>@Designwithdata</div>
            <div>@inspacegallery</div>
          </div>
        </div>
      </div>

<!--      right-->
      <div class="right">
        <div data-aos="fade-up">
          <div class="title">Credit</div>
          <div class="text">With thanks to the student production team: </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Website Design and Development</div>
          <div class="text">
            <div>Liyuan Sun</div>
            <div>Zehuan Wang</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Marketing and PR</div>
          <div class="text">
            <div>Wenhua Jiang</div>
            <div>Ganrong Tan</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Poster Design and Exhibition Catalogue</div>
          <div class="text">
            <div>Jenny Hu</div>
            <div>Yue Zhang</div>
            <div>Boya Chen</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Exhibition Construction Research and Setup Support</div>
          <div class="text">
            <div>Jenny Hu</div>
            <div>Yue Zhang</div>
            <div>Boya Chen</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="text">With thanks to our tutor team:</div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Design Informatics Workshop Technician</div>
          <div class="text">
            <div>Mark Kobine</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Design Informatics Research Centre Support Assistant</div>
          <div class="text">
            <div>Roxanne Wong</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Information, Technical and Technology Services</div>
          <div class="text">
            <div>Mike Boyd</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">ECA Technology Support Officer</div>
          <div class="text">
            <div>Mark Thompson</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Material Hub Team Lead</div>
          <div class="text">
            <div>Joan Quest</div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="sub-title">Support Services Area Manager</div>
          <div class="text">
            <div>Peter Thomson</div>
            <div>Graham Strachan</div>
          </div>
        </div>
      </div>
    </div>

<!--        footer-->
    <div class="footer">
      <div class="logo-container">
        <img :src="LogoBlack" alt="logo of design with data" class="logo" />
        <img :src="LogoUniversity" alt="logo of unversity of Edinburgh" class="logo" />
      </div>

      <div class="info-container">
        <div>
          <router-link to="/#main" class="title">About</router-link>
        </div>
        <div>
          <div class="title">Showcase</div>
          <router-link :to="{ path: '/showcase/fashion', query: { viewMode: viewMode } }" class="text">Fashion Informatics</router-link>
          <router-link :to="{ path: '/showcase/fashion', query: { viewMode: viewMode } }" class="text">Designing Ecologies</router-link>
        </div>
        <div>
          <!--    todo link-->
          <div class="title">Social Media</div>
          <div class="text social-media-link">@Designwithdata</div>
          <div class="text social-media-link">@inspacegallery</div>
        </div>
      </div>

      <div class="copyright">Copyright 2023 © University of Edinburgh, Design informatics All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Sponsor1 from '@/assets/img/HomeView/sponsor1.png';
import Sponsor2 from '@/assets/img/HomeView/sponsor2.png';
import LogoBlack from '@/assets/img/HomeView/logo-black.png';
import LogoUniversity from '@/assets/img/HomeView/logo-university.png';

export default {
  name: 'WelcomeView',
  components: {
    NavBar,
  },
  computed: {
    viewMode() {
      return this.$store.state.viewMode;
    },
  },
  data() {
    return {
      Sponsor1: Sponsor1,
      Sponsor2: Sponsor2,
      LogoBlack: LogoBlack,
      LogoUniversity: LogoUniversity,
    }
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.welcome {
  position: relative;
  width: 100%;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 32px 32px 0 32px;
  font-family: Helvetica Light;
  text-align: left;
  column-gap: wCalc(31);
  .title {
    margin-bottom: wCalc(20);
    font-size: fSizeCalc(24);
    font-weight: normal;
    line-height: fSizeCalc(44);
    letter-spacing: fSizeCalc(-0.44);
  }
  .text {
    font-size: fSizeCalc(14);
    font-weight: 400;
    line-height: fSizeCalc(20);
    letter-spacing: fSizeCalc(-0.44);
    opacity: 0.8;
    margin-bottom: wCalc(20);
    &.description {
      line-height: fSizeCalc(28);
    }
    &.social-media-link {
      text-decoration: underline;
    }
  }
  .sub-title {
    margin-bottom: wCalc(20);
  }
  .sponsor-img {
    height: hCalc(67);
    margin-bottom: wCalc(20);
    &:nth-child(1) {
      margin-right: wCalc(13);
    }
  }
}

#map-link {
  // TODO finish the link
  color: white;
  &:hover {
    color: #00c4ff;
  }
}

.footer {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: hCalc(77);
  padding: 0 31px;
  background: white;
  width: calc(100% - 62px);
  height: 213px;
  color: black;
  .logo-container {
    .logo {
      height: hCalc(54);
      &:nth-child(1) {
        margin-right: wCalc(18);
      }
    }
  }

  .info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: wCalc(369);
    .title {
      color: black;
      text-decoration: unset;
      font-family: Helvetica;
      font-size: fSizeCalc(16);
      font-weight: 700;
      line-height: fSizeCalc(28);
      text-align: left;
      white-space: nowrap;
    }
    .text {
      display: block;
      color: black;
      text-decoration: unset;
      font-family: Helvetica Light;
      font-size: fSizeCalc(12);
      font-weight: 400;
      line-height: fSizeCalc(16);
      letter-spacing: fSizeCalc(0.15);
      text-align: left;
      &.social-media-link {
        text-decoration: underline;
      }
    }
  }

  .copyright {
    position: absolute;
    left: 32px;
    bottom: 32px;
    font-family: Helvetica Light;
    font-size: fSizeCalc(14);
    font-weight: 400;
    line-height: fSizeCalc(28);
    text-align: left;
  }
}

@media screen and (max-width: 414px) {
  .content {
    grid-template-columns: 1fr;
    .title {
      font-size: fSizeCalc(32);
    }
    .text {
      margin-bottom: hCalcM(15);
      font-size: fSizeCalc(16);
    }
    .sub-title {
      margin-bottom: hCalcM(10);
    }
    .sponsor-img {
      width: wCalcM(138);
      height: wCalcM(55);
      margin-bottom: hCalcM(15);
    }
  }
  .footer {
    margin-top: hCalcM(26);
    padding: 26px 16px 0 16px;
    width: calc(100% - 32px);
    height: 166px;
    .logo-container {
      column-gap: wCalcM(15);
      .logo {
      //width: wCalcM(120);
      height: wCalcM(41);
      }
    }
    .info-container {
      display: none;
    }
    .copyright {
      left: 16px;
    }
  }
}
</style>


