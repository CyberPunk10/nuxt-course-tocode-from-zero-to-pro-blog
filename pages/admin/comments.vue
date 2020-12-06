<template>
  <section class="comments">
    <div class="container">
      <h2>Comments</h2>

      <CommentTable :thead="thead">
        <tbody slot="tbody">
          <tr v-for="comment in comments" :key="comment.id">
            <td><span>{{ comment.name }}</span></td>
            <td><span>{{ comment.text }}</span></td>
            <td>
              <span v-if="comment.status" class="status true">Publish</span>
              <span v-else class="status false">Hidden</span>
            </td>
            <td><span @click="changeComent(comment.id)" class="link"> Change status </span></td>
            <td><span @click="deleteComent(comment.id)" class="link"> btn delete </span></td>
          </tr>
        </tbody>
      </CommentTable>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'admin',

  data() {
    return {
      thead: ['Name', 'Text', 'Status', 'Change Status', 'Delete'],
      comments: [
        {
          id: 1,
          name: 'First post',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aut eum numquam mollitia corporis quia assumenda, officia eos porro illo earum dicta sapiente commodi, optio nesciunt. Adipisci pariatur inventore facilis.',
          img: 'https://images.unsplash.com/photo-1454264856604-ca40bd3a0a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1439&q=80',
          status: true
        },
        {
          id: 2,
          name: 'First post',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aut eum numquam mollitia corporis quia assumenda, officia eos porro illo earum dicta sapiente commodi, optio nesciunt. Adipisci pariatur inventore facilis.',
          img: 'https://images.unsplash.com/photo-1454264856604-ca40bd3a0a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1439&q=80',
          status: false
        },
        {
          id: 3,
          name: 'First post',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aut eum numquam mollitia corporis quia assumenda, officia eos porro illo earum dicta sapiente commodi, optio nesciunt. Adipisci pariatur inventore facilis.',
          img: 'https://images.unsplash.com/photo-1454264856604-ca40bd3a0a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1439&q=80',
          status: false
        },
        {
          id: 4,
          name: 'First post',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aut eum numquam mollitia corporis quia assumenda, officia eos porro illo earum dicta sapiente commodi, optio nesciunt. Adipisci pariatur inventore facilis.',
          img: 'https://images.unsplash.com/photo-1454264856604-ca40bd3a0a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1439&q=80',
          status: false
        }
      ]
    }
  },

  methods: {
    changeComent(id) {
      console.log('change coment - ', id)
    },
    deleteComent(id) {
      console.log('delete coment - ', id)
    }
  }
}
</script>

<style lang="sass">

</style>
