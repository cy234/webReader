<template>
  <div class="book">
    <img class="bookimage" src="@/assets/image/bookcover.jpg" :onerror="errorImage" width="120" height="160">
    <h4 class="details">{{booktitle}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      errorImage: "this.src='@/assets/image/bookcover.jpg'",
      booktitle: '一千零一夜'
    }
  }
}
</script>
<style scoped>
  .book {
    position: relative;
    box-shadow: #ccc 0px 5px 10px;
  }
  .book:hover{
    cursor: pointer;
  }
  
</style>
