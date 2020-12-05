<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">Blog</div>
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
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: 'Home', url: '/'},
        {title: 'About', url: '/about'}
      ]
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="sass">
.navbar-item
  .nuxt-link-exact-active
    color: #4b4

</style>
