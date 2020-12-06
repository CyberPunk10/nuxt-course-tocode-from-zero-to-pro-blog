<template>
  <section class="contact">
    <div class="container">
      <h2 class="title tac">Contact me!</h2>
      <Message v-if="message" :message="message" :class="mesClass"/>

      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="user.name">Name</AppInput>
        <AppInput v-model="user.email" type="email">Email</AppInput>
        <AppTextarea v-model="user.text">Text</AppTextarea>
        <!-- buttons -->
        <div class="controls tac">
          <AppButton class="btnWhite">Submit!</AppButton>
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
      this.message = "Yohooo"
      console.log(this.$route.path)
    }
  }
}
</script>

<style lang="sass">
.contact
  border-top: 1px solid #e6e6e6
  padding-top: 40px
  &-form
    max-width: 400px
    margin: 30px auto 0
  .controls
    margin: 15px 0 10px

</style>
