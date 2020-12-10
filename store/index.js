export const state = () => ({
  postsLoaded: [],
  token: null,
  commetsLoaded: []
})

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts
  },

  addPost(state, post) {
    state.postsLoaded.push(post)
  },

  saveEditPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },

  //comments
  addComment(state, commet) {
    state.commetsLoaded.push(commet)
  },

  // setToken
  setToken(state, token) {
    state.token = token
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

  //auth
  authUser({commit}, authData) {
    const key = 'AIzaSyAgpZ2lOeilGYLGxClhszVQWPHFf3L23yo'
    return this.$axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true // защищает админку (для обычных пользователей это не обязательно)
    })
      .then(res => { commit('setToken', res.data.idToken) })
      .catch(e => console.log(e))
  },

  addPost({commit}, post) {
    return this.$axios.post('https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/posts.json', post)
      .then(res => {
        commit('addPost', {...post, id: res.data.name})
      })
      .catch(e => console.log(e))
  },

  saveEditPost({commit, state}, postEdit) {
    return this.$axios.put(`https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/posts/${postEdit.id}.json?auth=${state.token}`, postEdit)
      .then(res => {
        commit('saveEditPost', postEdit)
      })
      .catch(e => console.log(e))
  },


  // comments
  addComment({commit}, comment) {
    return this.$axios.post('https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/comments.json', comment)
      .then(res => {
        commit('addComment', {...comment, id: res.data.name})
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded: state => state.postsLoaded,
  // getCommentsLoaded: state => state.commentsLoaded,
  checkAuthUser (state) {
    return state.token != null
  }
}
