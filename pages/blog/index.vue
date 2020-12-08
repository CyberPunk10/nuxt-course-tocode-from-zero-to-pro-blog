<template>
  <section>
    <div class="container">
      <Promo />
      <Intro title="My last posts:"/>
      <PostsList :posts="postsLoaded"/>
    </div>
    <Contacts/>
  </section>
</template>
<script>
export default {
  computed: {
    postsLoaded() {
      console.log("[blog/index.vue]", this.$store.getters.getPostsLoaded)
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
