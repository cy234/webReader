<template>
  <div id="booklist">
    <div class="addBook book">
      <input type="file" accept="text/plain,application/msword">
      <h4 id="details">支持TXT</h4>
    </div>
    
      <Book></Book>

  </div>
</template>
<script>
import Book from './Book'
export default {
  name: 'BookList',
  components: {
    Book
  }
}
</script>
<style>
#booklist {
  display: flex;
  position: fixed;
  left: 50%;
  top: 100px;
  margin-left: -32%;
  width: 80%;
  flex-wrap: wrap;
}
.addBook {
  background: #e8e8e8 url("~@/assets/image/add.png") 32px 55px no-repeat;
  position: relative;
}
h4 {
  position: absolute;
  width: 120px;
  margin: 0;
  bottom: 0px;
  color: white;
  background: #666;
  opacity: 0.8;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.addBook input:hover{
  cursor: pointer;;
}
.book {
  width: 120px;
  height: 160px;
  margin-right: 110px;
  margin-bottom: 40px;
}

.addBook input{
  opacity: 0;
  width: 120px;
  height: 160px;
}
</style>
