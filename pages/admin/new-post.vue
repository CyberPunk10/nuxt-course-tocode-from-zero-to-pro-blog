<template>
  <section>
    <NewPostForm @submit="onSubmit" titleForm="New post"/>
  </section>
</template>

<script>
export default {
  layout: 'admin',

  data() {
    return {

    }
  },

  methods: {
    onSubmit(post) {
      console.log(post)
      this.$store.dispatch('addPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style lang="sass">

</style>
