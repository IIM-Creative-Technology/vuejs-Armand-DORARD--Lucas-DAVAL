import { createStore } from 'vuex'
import { mapState } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  mutations: {
    POSTS_PUSH(newPost){
      state.posts.push(newPost)
    },
    POSTS_SPLIT(title){
      state.posts.forEach(element => {
        if (element[0] === title) {
          state.posts.split(element, 1)
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
