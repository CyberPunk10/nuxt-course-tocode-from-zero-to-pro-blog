<template>
  <table>

    <!-- thead -->
    <thead>
      <tr><th v-for="(th, index) in thead" :key="index">{{ th }}</th></tr>
    </thead>

    <!-- tbody -->
    <slot name="tbody"></slot>

  </table>
</template>

<script>
export default {
  props: {
    thead: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
// Default table
table {
  width: 100%;
  line-height: 1.5em;
  // mb
  border-collapse: separate;
  border-spacing: 0 16px;
  thead th {
    padding: 20px 22px;
    white-space: nowrap;
    font-size: 18px;
  }
  td {
    padding: 20px;
    font-size: 16px;
  }
  tbody tr {
    background-color: #ffffff;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    box-shadow: 0 16px 16px rgba(0,0,0,.01);
    &:hover {
      box-shadow: 0 16px 16px rgba(0,0,0,.06);
    }
  }
}
</style>

