<template>
  <div>
    <ul class="pagechange">
      <li class="inputpage"><input type="number" min="1" :max='pages'><span>/{{pages}}</span></li>
      <li><img src="~@/assets/image/lastpage.png" alt="上一页"></li>
      <li><img src="~@/assets/image/nextpage.png" alt="下一页"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
       pages: 12
    }
  }
}
</script>
<style scoped>
  .pagechange {
    position: fixed;
    bottom: 0;
    right: 0;
    list-style: none;
    display: flex;
  }
  .inputpage {
    line-height: 32px;
  }
  .inputpage input {
    border-radius: 12px;
    border: 1px solid;
  }
  .inputpage input:hover {
    border-color: #42b983;
  }
</style>
