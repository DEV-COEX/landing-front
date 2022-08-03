export const state = () => ({
  texts: [],
  text: {},
  transition: true
});

export const getters = {
  getTexts(state) {
    return state.texts;
  },

  getTrasition(state) {
    return state.texts;
  }
}

export const mutations = {
  setTexts(state, texts) {
    state.texts = texts;
  },

  filterText(state, uid) {
    state.text = state.texts.filter((el) => el.name === uid);
  },

  changeTrasition(state, estado) {
    state.transition = estado
    if (state.transition === false) {
      document.getElementById("contenedor").style.transition = "2s"
      document.getElementById("contenedor").style.height = "70vh"
      document.getElementById("contenedor").style.background = "linear-gradient(#1A0F5B, #24228A)"


    } else {
      document.getElementById("contenedor").style.transition = "2s"
      document.getElementById("contenedor").style.height = "80vh"
      document.getElementById("contenedor").style.background = "linear-gradient(#1C2365, #163B85)"
    }
  }
}

export const actions = {
  async fetchTexts ({ commit }) {
    const { data } = await this.$axios.get('page-texts');
    commit('setTexts', data);
    return 123;
  },

  animation({commit}, estado) {
    commit('changeTrasition', estado)
   
  }
}
