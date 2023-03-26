<template>
  <div class="Showcase">
<!--    <nav-bar class="nav" :viewMode="viewMode"></nav-bar>-->
    <transition :name="'fade'" mode="out-in">
      <component :is="viewMode==='carousel' ? 'ShowcaseCarousel' : 'ShowcaseGallery'"
                 :Placeholder="Placeholder"
                 :info="track === 'fashion' ? fashion : ecology"
                 @switchMode="switchMode"
                 @viewMore="viewMore"
      >
      </component>
    </transition>
<!--    <fast-entry :viewMode="viewMode"></fast-entry>-->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import ShowcaseCarousel from '@/components/Showcase/ShowcaseCarousel';
import ShowcaseGallery from '@/components/Showcase/ShowcaseGallery';
import FastEntry from '@/components/FastEntry';
import Placeholder from '@/assets/img/Showcase/placeholder.png';

export default {
  name: 'ShowcaseView',
  emits: ['switchMode'],
  props: {
    viewMode: String,
  },
  components: {
    ShowcaseGallery,
    ShowcaseCarousel,
    FastEntry,
    NavBar,
  },
  data() {
    return {
      track: this.$route.params.track,
      // viewMode: this.$route.query.viewMode,
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
          'conception and norm, to create new insights whilst fostering environmental awareness in consumers.'
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
      },
    };
  },
  methods: {
    switchMode(mode) {
      this.$emit('switchMode', mode);
    },
    viewMore(index) {
      // todo link to viewMore page
      console.log(index);
    }
  },
};
</script>

<style scoped lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
}

.Showcase {
  margin-top: 140px;
  background-color: black;
  width: 100vw;
  height: 100vh;
  color: white;
}
</style>
