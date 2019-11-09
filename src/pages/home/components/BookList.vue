<template>
  <div id='booklist'>
    <div class='addBook book'>
      <input type='file' accept='text/plain,application/msword' @change='uploadFile'>
      <h4 id='details'>支持TXT</h4>
    </div>
      <Book v-for='item of list' :key='item' :item='item' :list='list'></Book>
  </div>
</template>
<script>
import Book from './Book'
import indexedDB from '@/indexedDB/indexedDB'
export default {
  name: 'BookList',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    let _this = this;
    indexedDB.openDB('mybooks', 3, {
      name: 'books',
      key: 'name'
    }, function (db) {
      indexedDB.getAllData(db, 'books', 'name', function (result) {
        _this.list = [...result];
      })
    })
  },
  methods: {
    uploadFile (e) {
      let file = e.target.files[0];
      let _this = this;
      indexedDB.openDB('mybooks', 3, {
        name: 'books',
        key: 'name'
      }, function (db) {
        let bookdb = db;
        indexedDB.addData(bookdb, 'books', file, function () {
          _this.list.push(file.name);
        });
      })
    }
  },
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
  background: #e8e8e8 url('~@/assets/image/add.png') 32px 55px no-repeat;
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
