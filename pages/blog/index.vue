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
  head() {
    let title = 'My blog page',
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
