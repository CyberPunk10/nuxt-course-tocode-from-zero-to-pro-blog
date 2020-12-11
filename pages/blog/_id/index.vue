<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post"/>
    <Comments :comments="comments"/>
    <NewComment :postId="$route.params.id"/>
  </div>
</template>

<script>
export default {
  head() {
    let title = this.post.title,
        descr = this.post.descr,
        img = `https:/site.ru/${this.post.img}`,
        type = 'article'

    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:img', name: 'og:img', content: img },
      ]
    }
  },

  async asyncData(context) {
    let [post, comments] = await Promise.all([
      context.store.$axios.get(`https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`),
      context.store.$axios.get(`https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
    ])

    let commentsArrayRes = []

    // если есть комментарии, то ищем среди них опубликованные и относящиеся к this.post
    if (comments.data) {
      // 1 способ
      // let commentsArray = []
      // // приводим объект comments в массив (firebase хранит в объектах)
      // Object.keys(comments.data).forEach(key => {
      //   commentsArray.push(comments.data[key])
      // })
      // // перебираем все комментарии сравнивая с id поста и смотрим на статус publish
      // for (let i=0; i < commentsArray.length; i++) {
      //   if (commentsArray[i].postId === context.params.id && commentsArray[i].publish) {
      //     commentsArrayRes.push(commentsArray[i])
      //   }
      // }

      // 2 способ
      commentsArrayRes = Object.values(comments.data)
        .filter(comment => (
          comment.postId === context.params.id && comment.publish
        ))
    }

    return {
      post: post.data,
      comments: commentsArrayRes
    }
  },

  // computed: {
  //   commentsLoaded() {
  //     return this.$store.getters.getCommentsLoaded
  //   }
  // }
}
</script>

<style lang="sass">

</style>
