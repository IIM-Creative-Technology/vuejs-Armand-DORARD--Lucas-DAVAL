import { createStore } from 'vuex'
// import { mapState } from 'vuex'

export default createStore({
  state: {
    nbarticle: [
      //[title, metaTitle, metaDescription, Corps, author, url]
      ['Article1','MetaTitleArticle1','MetadescritpionArticle1', 'Description lorem ipsum de l\'artcle 1', 'Pierre', 'https://images.gameinfo.io/pokemon/256/143-00.png'],

      ['Article2','MetaTitleArticle2','MetadescritpionArticle2', 'Description lorem ipsum de l\'artcle 2', 'Pierre', 'https://images.gameinfo.io/pokemon/256/143-00.png'],
      ['Article3','MetaTitleArticle3','MetadescritpionArticle3', 'Description lorem ipsum de l\'artcle 3', 'Pierre', 'https://images.gameinfo.io/pokemon/256/143-00.png'],
  ]},
  getters: {
  },
  mutations: {
    POSTS_PUSH(state, newPost){
      state.nbarticle.push(newPost)           
    },
    POSTS_SPLIT(state,e){
      state.nbarticle.forEach(element => {
        console.log(element)
        if (e === element[0]) {
          console.log('ok')
          state.nbarticle.splice(element,1)
        }else{
          console.log('pasok')
        }
      })
      ;
    }
  },
  actions: {
    pushNewPost(context, state, newPost){
      // ---------------------------------------- Verify title is unique ----------------------//
      let verifyUnique = 0
      for (let i = 0; i < state.nbarticle.length; i++) {
        if (state.nbarticle[i][0] !== newPost[0]) {
          verifyUnique++
        }        
      }
      // ---------------------------------------- Verify title is unique ----------------------//



      if (verifyUnique === state.nbarticle.length-1) {
        context.commit('POSTS_PUSH', newPost)
      } 
    },

    splitPost({ commit }, state, post){
      state.nbarticle.forEach(element => {
        if (element[0] === post[0]) {
          commit('POSTS_SPLIT', element)
        }
      });
    }


    
  },
  modules: {
  }
})
