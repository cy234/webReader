<template>
  <div>
  <router-link tag='div' class='book' :to="'/bookdetail/'+name">
    <img class='bookimage' src='@/assets/image/bookcover.jpg' :onerror='errorImage' width='120' height='160' @contextmenu.prevent='showMenu'>
    <h4 class='details'>{{item.slice(0,-4)}}</h4>
  </router-link>
  <ContextMenu  :maxWidth='maxWidth' :visible='visible' :location='location'>
      <MenuItem @click='deletebook'>删除</MenuItem>
  </ContextMenu>
</div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu'
import MenuItem from '@/components/MenuItem'
import indexedDB from '@/indexedDB/indexedDB'
export default {
  name: 'Book',
  props: ['item', 'list'],
  data() {
    return {
      errorImage: "this.src='@/assets/image/bookcover.jpg'",
      name: this.item,
      maxWidth: '80px',
      visible: false,
      location: {}
    }
  },
  components: {
    ContextMenu,
    MenuItem
  },
  mounted () {
    let _this = this;
    document.addEventListener('click', function () {
      _this.visible = false;
    });
  },
  methods: {
    showMenu (e) {
      this.visible = true;
      this.location.x = e.pageX;
      this.location.y = e.pageY;
    },
    deletebook () {
      let _this = this;
      indexedDB.openDB('mybooks', 3, {
        name: 'books',
        key: 'name'
      }, function (db) {
        indexedDB.deleteData(db, 'books', _this.item);
        _this.list.splice(_this.list.indexOf(_this.item), 1);
      })
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
