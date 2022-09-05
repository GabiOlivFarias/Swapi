<template>
  <v-img
  :style="`background-image: url(${require('../assets/media/stars.jpg')})`"
  class="bg-image">
    <div class="home">
      <Header> </Header>
      <Expand :movies=movies>
      </Expand>
    </div>
  </v-img>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '../components/header/header.vue';
import Expand from '../components/navs/Expand.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    Expand,
  },
  data() {
    return {
      movies: [],
      characters: [],
      modeDetails: false, // for details
    };
  },
  computed: {
    ...mapGetters(['getMovies', 'getCharacters']),
  },
  methods: {
    ...mapActions(['storeMovies', 'storeCharacters']),
  },
  watch: {
    getMovies(value) {
      this.movies = value;
    },
    getCharacters(value) {
      this.characters = value;
    },
  },
  mounted() {
    this.storeMovies();
    console.log(this.movies);
    this.storeCharacters();
    console.log(this.characters);
  },
};
</script>

<style lang="scss" scoped>
  .bg-image{
    padding: 0 !important;
    background-repeat: repeat;
    min-height: 800px;
  }
</style>
