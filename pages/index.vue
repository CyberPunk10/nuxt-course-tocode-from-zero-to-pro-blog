<template>
  <section>
    <div class="container">
      <Promo />
      <PostsList :posts="posts"/>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      posts: [
        {id: 1, title: 'First post', descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aut eum numquam mollitia corporis quia assumenda, officia eos porro illo earum dicta sapiente commodi, optio nesciunt. Adipisci pariatur inventore facilis.', img: 'https://images.unsplash.com/photo-1454264856604-ca40bd3a0a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1439&q=80'},
        {id: 2, title: 'Second post', descr: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aut eum numquam mollitia corporis quia assumenda, officia eos porro illo earum dicta sapiente commodi, optio nesciunt. Adipisci pariatur inventore facilis.', img: 'https://images.unsplash.com/photo-1526550517342-e086b387edda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80'},
        {id: 3, title: 'Audi', descr: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates provident iure consequatur fuga veniam ducimus rerum ut minus dolorum. Est, officia. Eveniet magnam dolore id. Earum in autem dignissimos voluptatem.', img: 'https://images.unsplash.com/photo-1568994443334-5931a5fd8664?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'}
      ]
    }
  }
}
</script>
