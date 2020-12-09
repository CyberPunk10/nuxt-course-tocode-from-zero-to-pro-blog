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
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
