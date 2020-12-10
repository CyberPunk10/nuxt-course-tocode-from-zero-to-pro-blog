<template>
  <client-only>
    <section class="comments">
      <div class="container">
        <h2>Comments</h2>

        <CommentTable :thead="thead">
          <tbody slot="tbody">
            <tr v-for="comment in comments" :key="comment.id">
              <td><span>{{ comment.name }}</span></td>
              <td><span>{{ comment.text }}</span></td>
              <td>
                <span v-if="comment.publish" class="status true">Publish</span>
                <span v-else class="status false">Hidden</span>
              </td>
              <td><span @click="changeComent(comment)" class="link"> Change status </span></td>
              <td><span @click="deleteComent(comment.id)" class="link"> btn delete </span></td>
            </tr>
          </tbody>
        </CommentTable>
      </div>
    </section>
  </client-only>
</template>

<script>
export default {
  layout: 'admin',

  data() {
    return {
      thead: ['Name', 'Text', 'Status', 'Change Status', 'Delete'],
      comments: []
    }
  },

  mounted() {
    this.loadComments()
  },

  methods: {
    loadComments() {
      this.$axios
        .get('https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
          .then(res => {
            // console.log('[res]', res)
            let commentsArray = []

            if (res.data) { // если есть данные..
              Object.keys(res.data).forEach(key => {
                const comment = res.data[key]
                commentsArray.push({...comment, id: key}) // т.к. key === id (-MO5EZAXf2UJMrySZbD1)
              })
              // console.log('[commentsArray]', commentsArray)
            }

            this.comments = commentsArray
          })
    },

    changeComent(comment) {
      // console.log('change coment - ', comment)
      comment.publish = !comment.publish
      this.$axios
        .put(`https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`, comment)
          // .then(res => {})
          .catch(e => console.log(e))
    },

    deleteComent(id) {
      this.$axios
        .delete(`https://nuxt-course-tocode-blog-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`)
          .then(res => { this.loadComments() })
          .catch(e => console.log(e))
    }
  }
}
</script>

<style lang="sass">

</style>
