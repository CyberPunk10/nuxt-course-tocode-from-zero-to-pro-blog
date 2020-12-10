<template>
  <section class="auth">
    <div class="container">
      <h2 class="title tac">Authorization</h2>
      <form @submit.prevent="onSubmit" class="auth-form">
        <AppInput v-model="user.email" type="email">Login</AppInput>
        <AppInput v-model="user.password" type="password">Password</AppInput>
        <div class="control tac">
          <AppButton>Login!</AppButton>
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
        email: '',
        password: ''
      },
    }
  },
  methods: {
    onSubmit() {
      // console.log(this.user.email, this.user.password)
      this.$store.dispatch('authUser', this.user)
        .then(res => {
          // console.log(res)
          this.$router.push('/admin')
        })
        .catch(e => {
          console.log(e)
          this.user.password = ''
        })

      // Reset
    }
  }
}
</script>

<style lang="sass">
.auth
  .container
    height: 50vh
    min-height: 300px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  &-form
    max-width: 400px
    min-width: 300px
    margin: 30px auto 0
</style>
