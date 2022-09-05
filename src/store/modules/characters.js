import Characters from '@/api/resources/character';

const state = {
  saveCharacters: [],
};

const getters = {
  getCharacters: () => (state.saveCharacters),
};

const actions = {
  // responsible for performing the action of storing the API data by pulling the values
  storeCharacters({ commit }) { // action that will pull the data and pull a change to save the movies
    Characters.data().then((response) => {
      commit('keepCharacters', response.results); // commit calls mutation keepMovies to store the data
    });
  },
};
const mutations = {
  keepCharacters($state, payload) { // the change of state called by the action happens
    const stateCopy = $state;
    stateCopy.saveCharacters = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
