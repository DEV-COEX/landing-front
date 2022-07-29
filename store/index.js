export const state = () => ({
  texts: [],
  text: {}
});

export const getters = {
  getTexts(state) {
    return state.texts;
  }
}

export const mutations = {
  setTexts(state, texts) {
    state.texts = texts;
  },

  filterText(state, uid) {
    state.text = state.texts.filter((el) => el.name === uid);
  }
}

export const actions = {
  async fetchTexts ({ commit }) {
    const { data } = await this.$axios.get('page-texts');
    commit('setTexts', data);
    return 123;
  }
}
