<template>
  <section class="new-post">
    <div class="container">
      <h2 v-if="titleForm" class="title tac">{{ titleForm }}</h2>
      <form @submit.prevent>
        <AppInput v-model="post.title">Title:</AppInput>
        <AppTextarea v-model="post.descr">Description:</AppTextarea>
        <AppInput v-model="post.img">Img link:</AppInput>
        <AppTextarea v-model="post.content">Content:</AppTextarea>

        <div class="conrols tac">
          <AppButton @click="cancel" class="btnDanger">Cancel</AppButton>
          <AppButton @click="onSave">Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    titleForm: {
      type: String,
      default: null
    },
    postEdit: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      post: this.postEdit ? this.postEdit : {
        title: '',
        descr: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    cancel() {
      this.$router.push('/admin')
    },
    onSave() {
      this.$emit('submit', this.post)
    }
  }
}
</script>

<style lang="sass">
.new-post
  form
    margin: 0 auto
    max-width: 500px

</style>
