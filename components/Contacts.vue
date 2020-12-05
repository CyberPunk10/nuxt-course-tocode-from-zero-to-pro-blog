<template>
  <section class="contact">
    <div class="container">
      <h2 class="contact-title">Contact me!</h2>
      <form @submit.prevent="onSubmit" class="contct-form">
        <label>Name: </label>
        <input v-model="user.name" type="text">
        <label>Email: </label>
        <input v-model="user.email" type="text">
        <label>Text: </label>
        <textarea v-model="user.text"></textarea>
        <!-- buttons -->
        <div class="controls">
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
.contact
  text-align: center
  background: #ccc // fallback for old browsers
  background: -webkit-linear-gradient(to right, #bbb, #aaa) // Chrome 10-25, Safari 5.1-6
  background: linear-gradient(to right, #bbb, #aaa) // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+


  color: #fff
  &-form
    max-width: 600px
    margin: 30px auto 0
  .controls
    margin: 30px 0

</style>
