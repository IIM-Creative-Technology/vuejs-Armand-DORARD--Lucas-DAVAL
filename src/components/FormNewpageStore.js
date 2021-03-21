import Vuex from 'vuex'


let store = new Vuex.Store({
    state: {
        posts: []
    },
    mutations: {
        POSTS_PUSH(state, newPost){
            state.posts.push(newPost)           
        },
    },
    getters: {

    },
    actions: {

    }
})

global.store = store

export default store