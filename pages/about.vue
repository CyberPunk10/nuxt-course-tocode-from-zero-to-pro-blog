<template>
  <section>
    <div class="container">
      <h1 class="title">About my blog</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sunt nihil debitis animi dolor vero enim rem qui voluptatibus! Delectus illum, odit placeat quod neque cum odio. Aspernatur, dignissimos vel?</p>
      <client-only>
        <Intro title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, voluptatem debitis totam quidem ipsa necessitatibus voluptatibus, dolore aperiam quam quod repellendus esse inventore omnis porro illo beatae."/>
      </client-only>
      <img src="@/assets/img/green-chameleon-s9CC2SKySJM-unsplash.jpg" alt="">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod laudantium nisi rem saepe vitae sapiente, assumenda provident consequatur! Debitis voluptatem fugiat cumque vitae accusamus amet iure qui tempore, eius reiciendis!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam deleniti harum molestiae obcaecati, dolore consectetur tempore? Reprehenderit expedita consectetur omnis aliquam eius! Maxime debitis molestias minus, mollitia incidunt laboriosam.</p>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    let title = 'My blog | about',
        descr = 'About My SSR blog wich nuxt.js',
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
}
</script>
