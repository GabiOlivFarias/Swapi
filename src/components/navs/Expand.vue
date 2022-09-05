<template>
  <v-layout align-center justify-center>
    <v-card class="items" width="700px" min-height="500px">
      <ul v-for="(films, key) in movies" :key="key" class="list-movies">
        <li @click="checkDetails(modeDetails, key)" class="movies">
          <button>
            <h2 class="item-movies"> {{ films.title }} </h2>
          </button>
          <v-expand-transition>
            <v-card v-show="modeDetails == key"  class="datail">
              <h3> Director: {{ films.director }}</h3>
              <span class="release-date"> Release date: {{ films.release_date }}</span>
              <v-row class="poster" justify="center">
                <v-img :src="images[key]" max-width="300" max-height="500" ></v-img>
              </v-row>
              <h4>Characters:</h4>
              <div v-for="(people, index) in films.characters" :key="index">
                {{ findPeople(people) }}
              </div>
            </v-card>
        </v-expand-transition>
        </li>
      </ul>
    </v-card>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Expand',
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      modeDetails: -1, // for details
      images: [
        'https://i.pinimg.com/564x/d7/8c/12/d78c12b0d15dca406a221d32fa474c83.jpg',
        'https://i.pinimg.com/564x/9b/db/cf/9bdbcfc753a838936d269b432bab4f11.jpg',
        'https://i.pinimg.com/564x/4e/bf/2d/4ebf2db3951aa0f7f8ee128a6c426f35.jpg',
        'https://i.pinimg.com/564x/9d/e9/21/9de921d2994c3ddf50dfdc726eed12cd.jpg',
        'https://i.pinimg.com/564x/95/47/88/95478810b855f80ebac8fb19061017e1.jpg',
        'https://i.pinimg.com/564x/ff/dc/46/ffdc46fc9e7742449cc9807b31f4ae4f.jpg',
      ],
    };
  },
  methods: {
    ...mapActions(['storeCharacters']),
    findPeople(people) {
      const theCharacter = this.getCharacters.find(
        (character) => character.url === people,
      );
      if (theCharacter) {
        return theCharacter.name;
      }
      return '';
    },

    checkDetails(modeDetails, key) {
      if (modeDetails === key) {
        this.modeDetails = -1;
      } else {
        this.modeDetails = key;
      }
      return this.modeDetails;
    },
  },
  computed: {
    ...mapGetters(['getCharacters']),
  },
};
</script>

<style lang="scss" scoped>
.items{
  background-image: url('https://i.pinimg.com/736x/a6/32/f1/a632f1fe48a8a76efd3b61d379cf56fd.jpg');
  background-repeat: repeat;
  padding: 10px;
  text-decoration: underline;
  margin-bottom: 70px;
  h2{
    color: #d6a609;
    font-family: "jedi",Arial, Helvetica, sans-serif;
    text-shadow: 2px 2px 2px #000000;
  }
  .datail{
    text-align: center;
    justify-content: center;
    background-color: #f5dec9;
  }
  .poster{
    padding: 15px;
}
  .movies{
    text-decoration: none;
    text-align: center;
    margin: auto;
    padding: 10px;
  }
}
</style>
