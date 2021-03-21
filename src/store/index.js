import { createStore } from 'vuex'

export default createStore({
  state: {
    nbarticle: [
      //[title, metaTitle, metaDescription, Corps, author]
      ['Article1','MetaTitleArticle1','MetadescitpionArticle1', 'Description lorem ipsum de l\'artcle 1','Pierre'],

      ['Article2','MetaTitleArticle2','MetadescitpionArticle2', 'Description lorem ipsum de l\'artcle 2','Pierre'],
      ['Article3','MetaTitleArticle3','MetadescitpionArticle3', 'Description lorem ipsum de l\'artcle 3','Pierre'],
  ]},
  getters: {
  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})
