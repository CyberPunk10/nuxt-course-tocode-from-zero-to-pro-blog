export const state = () => ({
  postsLoaded: []
})

export const mutations = {
  setPosts(state, posts) {
    console.log('[POSTS]', posts)
    // state.postsLoaded = posts
    console.log(state.postLoaded)
  },

  addPost(state, post) {
    state.postsLoaded.push(post)
  }
}

export const actions = {
  nuxtServerInit({commit}, context) {
    return this.$axios.get('https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .then(res => {
        const postsArray = []
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },

  addPost({commit}, post) {
    return this.$axios.post('https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json', post)
      .then(res => {
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded(state) {
    return state.postLoaded
  }
}
