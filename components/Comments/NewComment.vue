<template>
  <section class="comment">
    <div class="container">
      <h2 class="title tac">New comment</h2>
      <Message v-if="message" :message="message" :class="mesClass"/>

      <form @submit.prevent="onSubmit" class="comment-form">
        <AppInput v-model="comment.name">Name</AppInput>
        <AppTextarea v-model="comment.text">Text</AppTextarea>
        <!-- buttons -->
        <div class="controls tac">
          <AppButton>Create comment</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      comment: {
        name: '',
        text: ''
      },
      message: null,
      mesClass: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
        ...this.comment
      })
        .then( () => {
          this.message = 'Submited'
          this.comment.name = this.comment.text = ''
        })
        .catch( e => console.log(e))
    }
  }
}
</script>

<style lang="sass">
.comment
  &-form
    max-width: 400px
    margin: 30px auto 0
  .controls
    margin: 15px 10px

</style>
