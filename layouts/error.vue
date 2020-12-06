<template>
  <section class="not-found">
    <div class="not-found__wrapper">
      <p class="title">Page not found</p>
      <nuxt-link to="/">Back to mein page</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.not-found__wrapper
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  width: 100%
  height: 70vh

</style>
