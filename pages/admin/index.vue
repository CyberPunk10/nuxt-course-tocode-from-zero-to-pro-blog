<template>
  <section class="admin">
    <div class="container">
      <Promo />
      <PostsList :posts="postsLoaded" :admin="true"/>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }

}
</script>

<style lang="sass">

</style>
