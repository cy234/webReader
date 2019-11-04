<template>
  <router-link tag='div' class="book" :to="'/bookdetail/'+name">
    <img class="bookimage" src="@/assets/image/bookcover.jpg" :onerror="errorImage" width="120" height="160">
    <h4 class="details">{{item.slice(0,-4)}}</h4>
  </router-link>
</template>

<script>
export default {
  name: 'Book',
  props: ['item'],
  data() {
    return {
      errorImage: "this.src='@/assets/image/bookcover.jpg'",
      name: this.item
    }
  }
}
</script>
<style scoped>
  .book {
    position: relative;
    box-shadow: #ccc 0px 5px 10px;
  }
  .book:hover {
    cursor: pointer;
  }
</style>
