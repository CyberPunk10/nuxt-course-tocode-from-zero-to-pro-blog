<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <PostPreview
          v-for="post in posts" :key="post.id"
          :post="post"
          :admin="admin"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">
.posts__wrapper
  display: flex
  justify-content: space-between
  flex-wrap: wrap
</style>
