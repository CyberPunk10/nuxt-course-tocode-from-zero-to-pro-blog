<template>
  <section class="comment">
    <div class="container">
      <h2 class="comment-title">New comment.</h2>
      <form @submit.prevent="onSubmit" class="contct-form">
        <AppInput v-model="user.name">Name:</AppInput>
        <AppTextarea v-model="user.text">Text:</AppTextarea>
        <!-- buttons -->
        <div class="controls">
          <AppButton>Create comments</AppButton>
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
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
    }
  }
}
</script>

<style lang="sass">
.comment
  text-align: center
  background: none
  color: #444
  &-form
    max-width: 600px
    margin: 30px auto 0
  .controls
    margin: 30px 0

</style>
