<template>
  <section  v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments:</h2>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="sass">
.comments .comment
  padding: 20px
  margin-bottom: 20px
  background: #fff
  text-align: left
  .name
    margin-bottom: 12px
    font-size: 24px
    color: #4b4
  .text
    color: #444
    font-size: 14px
    letter-spacing: .3px
</style>
