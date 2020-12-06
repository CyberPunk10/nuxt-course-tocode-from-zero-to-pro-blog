<template>
  <ul class="navbar-list">
    <li
      class="navbar-item"
      v-for="link in links" :key="link.title"
    >
      <nuxt-link
        class="navbar-link"
        :to="link.url"
        :title="link.title"
      >{{ link.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: '+ New post', url: '/admin/new-post'}
      ]
    }
  }
}
</script>

<style lang="sass">
.navbar-content-admin
  .navbar-list
    justify-content: flex-end

  .navbar-link
    font-size: 16px
    padding: 7px 0
</style>
