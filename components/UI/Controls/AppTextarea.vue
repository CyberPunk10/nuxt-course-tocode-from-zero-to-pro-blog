<template>
  <div class="control">
    <label><slot/></label>
    <textarea
      :value="value"
      @input="$emit('input', $event.target.value)">
    </textarea>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.control textarea
  resize: vertical
  min-height: 100px
  overflow: hidden
</style>
