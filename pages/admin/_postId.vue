<template>
  <section>
    <NewPostForm @submit="onSubmit" titleForm="Editing post"/>
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
    }
  }
}
</script>

<style lang="sass">

</style>
