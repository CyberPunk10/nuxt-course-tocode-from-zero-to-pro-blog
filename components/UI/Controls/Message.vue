<template>
  <div class="message" :class="mesClass">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    mesClass: {
      type: String,
      default: 'success'
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.message
  font-size: 22px
  &.success
    color: $success-color
  &.error
    color: $danger-color
</style>
