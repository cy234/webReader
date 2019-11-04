<template>
  <div>书本阅读
    <pre>{{txt}}</pre>
  </div>
</template>
<script>
import indexedDB from '@/indexedDB/indexedDB'
export default {
  name: 'BookDetail',
  data () {
    return {
      txt: '',
      name: ''
    }
  },
  created () {
    this.name = this.$route.params.name;
    var _this = this;
    indexedDB.openDB('mybooks', 3, {
      name: 'books',
      key: 'name'
    }, function (db) {
      indexedDB.getData(db, 'books', _this.name, function (result) {
       console.log (result);
      })
    })
  }
}
</script>
