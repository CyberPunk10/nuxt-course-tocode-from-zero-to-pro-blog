<template>
  <section>
    <div class="container">
      <Promo />
      <PostsList :posts="postsLoaded"/>
    </div>
  </section>
</template>
<script>
export default {
  head() {
    let title = 'My SSR blog',
        descr = 'My SSR blog wich nuxt.js',
        type = 'site'

    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
      ]
    }
  },

  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
