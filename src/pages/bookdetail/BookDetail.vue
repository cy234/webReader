<template>
  <div>
    <header>
      <router-link tag='div' to="/" replace>
        <img class="back" src='~@/assets/image/back.png' alt="back">
      </router-link>
      <h2>{{name.slice(0,-4)}}</h2>
      <div class="change" @mouseover='show' @mouseout='hide'>
       <span>{{format}}</span>
        <img class="down" src="~@/assets/image/down.png" alt="">
        <ul v-show="see" @mouseover='show' @mouseout='hide'>
          <li v-for='item of formatlist' :key='item' @click='select(item)'>{{item}}</li>
        </ul>
      </div>
    </header>
    <pre>{{txt}}</pre>
    <Pagination></Pagination>
  </div>
</template>
<script>
import indexedDB from '@/indexedDB/indexedDB'
import Pagination from './components/Pagination'
export default {
  name: 'BookDetail',
  data () {
    return {
      txt: '',
      name: '',
      format: 'gb2312',
      formatlist: ['gb2312', 'utf-8'],
      see: false
    }
  },
  components: {
    Pagination
  },
  mounted () {
    this.name = this.$route.params.name;
    this.loadfile();
  },
  methods: {
    show: function () {
      this.see = true;
    },
    hide: function () {
      this.see = false;
    },
    select: function (value) {
      this.format = value;
      this.loadfile();
    },
    loadfile: function () {
    var _this = this;
    indexedDB.openDB('mybooks', 3, {
      name: 'books',
      key: 'name'
    }, function (db) {
      indexedDB.getData(db, 'books', _this.name, function (result) {
       let reader = new FileReader();
       reader.readAsText(result, _this.format);
       reader.onload = function (e) {
        _this.txt = e.target.result;
       }
      })
    })
    }
  }
}
</script>
<style scoped>
header {
  display: flex;
  height: 50px;
  position: fixed;
  width: 100%;
  background: #fff;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
}
header h2 {
  display: inline;
  width: 100%;
  margin-top: 0;
  line-height: 50px;
}
.back {
  margin-left: 50%;
}
.down {
  transform: translate(0, 5px);
}
.back:hover,.change:hover  {
  cursor: pointer;
}
.change {
  position: absolute;
  right: 20px;
}
.change span {
  line-height: 50px;
}
.change ul {
  position: absolute;
  list-style: none;
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-right: 40px;
  right: 10px;
  top: 30px;
  background: #fff;
}
.change ul li {
  padding: 5px;
}
.change ul li:hover {
  color: #42b983;
}
pre {
  text-align: left;
  word-wrap: break-word;;
  white-space: pre-wrap;
  width: 80%;
  margin: 100px auto;
}
</style>

