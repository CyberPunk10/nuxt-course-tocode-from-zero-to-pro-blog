<template>
  <section>
    <NewPostForm @submit="onSubmit" titleForm="Editing post" :postEdit="post"/>
  </section>
</template>

<script>
export default {
  layout: 'admin',

  // data() {
  //   return {
  //     post: {
  //       id: 1,
  //       title: 'First post',
  //       descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aut eum numquam mollitia corporis quia assumenda, officia eos porro illo earum dicta sapiente commodi, optio nesciunt. Adipisci pariatur inventore facilis.',
  //       img: 'https://images.unsplash.com/photo-1454264856604-ca40bd3a0a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1439&q=80',
  //       content: 'content'
  //     },
  //   }
  // },

  asyncData({store, params}) {
    return store.$axios.get(`https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`)
      .then(res=> {
        return {
          post: {...res.data, id: params.postId}
        }
      })
      .catch(e => console.log('[error]', e))
  },

  methods: {
    onSubmit(post) {
      this.$store.dispatch('saveEditPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style lang="sass">

</style>
