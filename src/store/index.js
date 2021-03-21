import { createStore } from 'vuex'

export default createStore({
  state: {
    nbarticle: [
      //[title, metaTitle, metaDescription, Corps, author]
      ['Article1','Description lorem ipsum de l\'artcle 2','Pierre'],

      ['Article3','Description lorem ipsum de l\'artcle 2','Pierre'],
  ]},
  getters: {
    getArticle: state => {
      return `${state.nbarticle[0][0]} ${state.nbarticle[0][1]} ${state.nbarticle[0][2]}`
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})
