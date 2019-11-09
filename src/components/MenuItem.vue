<template>
  <li @click='handleClick'>
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: 'MenuItem',
  methods: {
    handleClick (event) {
      this.$emit('click', this, event);
    }
  }
}
</script>
<style>
li {
  padding: 2px 14px;
}
li:hover {
  background-color: #42b983;
  color: #fff;
}
</style>
