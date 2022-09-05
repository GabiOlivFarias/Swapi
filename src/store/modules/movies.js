import Movies from '@/api/resources/movie';

const state = {
  saveMovies: [],
};

const getters = {
  getMovies: () => (state.saveMovies),
};

const actions = {
  // responsible for performing the action of storing the API data by pulling the values
  storeMovies({ commit }) { // action that will pull the data and pull a change to save the movies
    Movies.list().then((response) => {
      commit('keepMovies', response.results); // commit calls mutation keepMovies to store the data
    });
  },
};
const mutations = {
  keepMovies($state, payload) { // the change of state called by the action happens
    const stateCopy = $state;
    stateCopy.saveMovies = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
