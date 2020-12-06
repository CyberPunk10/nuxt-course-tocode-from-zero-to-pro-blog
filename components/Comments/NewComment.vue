<template>
  <section class="comment">
    <div class="container">
      <h2 class="title tac">New comment</h2>
      <Message v-if="message" :message="message" :class="mesClass"/>

      <form @submit.prevent="onSubmit" class="comment-form">
        <AppInput v-model="user.name">Name</AppInput>
        <AppTextarea v-model="user.text">Text</AppTextarea>
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
  data() {
    return {
      user: {
        name: '',
        email: '',
        text: ''
      },
      message: false,
      mesClass: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
      this.message = 'yes'
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
