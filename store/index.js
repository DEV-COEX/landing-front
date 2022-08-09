export const state = () => ({
  texts: [],
  text: {},
  offers: [],
  transition: true,
  home: false,
  cards: [],
});

export const getters = {
  getTexts(state) {
    return state.texts;
  },

  getTrasition(state) {
    return state.texts;
  },
  getHome(state) {
    return state.texts;
  },
  getOffers(state) {
    return state.offers;
  },
  getCards(state) {
    return state.cards;
  }
}

export const mutations = {
  setTexts(state, texts) {
    state.texts = texts;
  },

  filterText(state, uid) {
    state.text = state.texts.filter((el) => el.name === uid);
  },

  setOffers(state, offers) {
    state.offers = offers;
  },

  changeTrasition(state, estado) {
    state.transition = estado
    if (state.transition === false) {
      document.getElementById("contenedor").style.transition = "2s"
      document.getElementById("contenedor").style.height = "70vh"
      document.getElementById("contenedor").style.background = "linear-gradient(#1A0F5B, #24228A)"
      document.getElementById("next").style.display = "none"
      document.getElementById("conoceMas").style.display = "flex"

    } else {
      document.getElementById("contenedor").style.transition = "2s"
      document.getElementById("contenedor").style.height = "80vh"
      document.getElementById("contenedor").style.background = "linear-gradient(#1C2365, #163B85)"
      document.getElementById("next").style.display = "flex"
      document.getElementById("conoceMas").style.display = "none"
    }
  },

  changeHome(state, estadoHome) {
    state.home = estadoHome
    if (state.home === false) {
      document.getElementById("home").style.height = "100vh"
      document.getElementById("home").style.transition = "2s"
    } else {
      document.getElementById("home").style.height = "100%"
    }
  },

  setCards(state, cards) {
    state.cards = cards;
  }
}

export const actions = {
  async fetchTexts({commit}) {
    const {data} = await this.$axios.get('page-texts');
    commit('setTexts', data);
  },

  async fetchOffers({commit}) {
    const {data} = await this.$axios.get('offers');
    commit('setOffers', data);
  },

  animation({commit}, estado) {
    commit('changeTrasition', estado)

  },
  home({commit}, estadoHome) {
    commit('changeHome', estadoHome)
  },
  async fetchCards({commit}) {
    const {data} = await this.$axios.get('educations');
    data.forEach((el) => {
      el.image.url = `https://api.cms.coex.com.co${el.image.url}`
    })
    commit('setCards', data);
  }
}
