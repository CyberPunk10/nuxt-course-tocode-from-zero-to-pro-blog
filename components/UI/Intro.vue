<template>
  <section class="intro">
    <div class="container">
      <h2>{{ title }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.intro .container
  text-align: center
  color: #fff
  background-color: #4b4
  padding: 1.5rem 1rem
  h1
    font-size: 26px
</style>
