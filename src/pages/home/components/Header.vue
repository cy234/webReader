<template>
  <div>
    <input @keyup.enter="searchResourse" type="text" id="search" v-model="inputVal" placeholder="搜索资源">
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      inputVal: ''
    }
  },
  methods: {
    searchResourse () {
      this.$emit('change', this.inputVal)
    }
  }
}
</script>

<style scoped>
.div{
  height: 200px;
}
#search{
  background: #fff url("~@/assets/image/search.png") 8px 5px no-repeat;
  background-size: 20px;
  width: 180px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 30px;
  line-height: 30px;
  float: right;
  margin: 10px 80px;
  padding: 0 10px 0 30px;
  font-size: 13px;
}
</style>
