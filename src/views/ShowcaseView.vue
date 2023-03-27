<template>
  <div class="Showcase">
<!--    <nav-bar class="nav" :viewMode="viewMode"></nav-bar>-->
    <transition :name="'fade'" mode="out-in">
      <component :is="viewMode==='carousel' ? 'ShowcaseCarousel' : 'ShowcaseGallery'"
                 :Placeholder="Placeholder"
                 :info="track === 'fashion' ? fashion : ecology"
                 @viewMore="viewMore"
      >
      </component>
    </transition>

    <showcase-project
      class="showcase-project"
      :class="[isShowProject ? 'isShow' : 'isHidden']"
      :Placeholder="Placeholder"
      @closeProjectPage="closeProjectPage"
      @getPreviousProject="getPreviousProject"
      @getNextProject="getNextProject"
    >
    </showcase-project>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ShowcaseCarousel from '@/components/Showcase/ShowcaseCarousel';
import ShowcaseGallery from '@/components/Showcase/ShowcaseGallery';
import Placeholder from '@/assets/img/Showcase/placeholder.png';
import { mapMutations } from "vuex";
import ShowcaseProject from "@/components/Showcase/ShowcaseProject";

export default {
  name: 'ShowcaseView',
  components: {
    ShowcaseProject,
    ShowcaseGallery,
    ShowcaseCarousel,
    NavBar,
  },
  computed: {
    viewMode() {
      return this.$store.state.viewMode;
    },
    path() {
      return this.$route.params.track;
    }
  },
  data() {
    return {
      track: this.$route.params.track,
      isShowProject: false,
      Placeholder: Placeholder,
      fashion: {
        description: 'Fashion Informatics explores data in the context and landscape of fashion, ' +
          'whether it is the body, the possibility of movement and 3D cloth, ' +
          'or envisioning new retail environments, shopping experiences and business models, ' +
          'with sustainability as a core lens to inform students’ design thinking. ' +
          'Working with 2nd year BA fashion students, led by Emma Clifton, ' +
          'each group in this cohort takes inspiration from the students’ digital fashion garments, ' +
          'their concepts and processes, into an expanded range of applications such as AR virtual try-on, ' +
          'decentralised AI fashion platform, blockchain technology for fashion transparency. ' +
          'The works in display seek to rethink, disrupt and reimagine fashion beyond its physicality, ' +
          'conception and norm, to create new insights whilst fostering environmental awareness in consumers.',
        projects: [
          {index: 0, track:'fashion'},
          {index: 1, track:'fashion'},
          {index: 2, track:'fashion'}
        ],
      },
      ecology: {
        description: 'Designing Ecologies explores data through the lenses of natural and ecological systems. ' +
          'It questions how we can adapt the design of data-driven artefacts and systems to consider the emergent qualities and embedded meanings in the data, ' +
          'how different forms of life are expressed, interconnected, ' +
          'as well as giving ‘voices’ to the more-than-human and the underrepresented during data collection and materialisation. ' +
          'The works in display explore the future effects of human activity on the Earth System, ranging from the degradation of coral reefs, ' +
          'morphological modifications in plants, bumblebees, phenological mismatches between trees, ' +
          'caterpillars and birds, to marine ecosystems through participatory games, ' +
          'bio-design approaches to data physicalisation and sculptural installations.',
        projects: [
          {index: 0, track:'ecology'},
          {index: 1, track:'ecology'},
          {index: 2, track:'ecology'},
          {index: 3, track:'ecology'},
        ],
      },
    };
  },
  methods: {
    ...mapMutations([
      'setProject',
    ]),
    switchMode(mode) {
      this.$emit('switchMode', mode);
    },
    viewMore(index) {
      this.$store.commit('setProject', this.track === 'fashion' ? this.fashion.projects[index] : this.ecology.projects[index]);
      this.isShowProject = true;
    },
    closeProjectPage() {
      this.isShowProject = false;
    },
    getPreviousProject(index) {
      this.$store.commit('setProject', this.track === 'fashion' ? this.fashion.projects[index] : this.ecology.projects[index])
    },
    getNextProject(index) {
      this.$store.commit('setProject', this.track === 'fashion' ? this.fashion.projects[index] : this.ecology.projects[index])
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';

.nav {
  position: fixed;
  top: 0;
  left: 0;
}

.Showcase {
  //position: relative;
  //margin-top: hCalc(140);
  background-color: black;
  width: 100vw;
  height: 100vh;
  color: white;
}

.showcase-project {
  position: absolute;
  bottom: 0;
  margin-top: 118px;
  z-index: 100;
}

.isShow {
  height: calc(100vh - 118px);
}

.isHidden {
  height: 0;
}
</style>
