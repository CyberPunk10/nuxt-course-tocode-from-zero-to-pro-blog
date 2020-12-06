<template>
  <header>
    <div class="navbar" :class="{admin: this.$route.path === '/admin'}">
      <div class="container">

        <div class="navbar-content">
          <div><nuxt-link class="logo" to="/">Blog</nuxt-link></div>
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
        <!-- admin-panel -->
        <div v-if="this.$route.path === '/admin'" class="navbar-content-admin">
          <AdminPanel/>
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
        {title: 'Blog', url: '/blog'},
        {title: 'About', url: '/about'},
        {title: 'Admin', url: '/admin'}
      ]
    }
  }
}
</script>

<style lang="sass">
.navbar-item
  .nuxt-link-exact-active
    color: #4b4
.logo
    color: #333

.navbar-content-admin
  border-top: 1px solid #eee
  justify-content: flex-end

</style>
