<template>
  <div>
    <ul class='pagechange'>
      <li class='inputpage'><input type='number' min='1' :max='pages' @keydown='getclickPage' placeholder="页数"></li>
      <li @click='lastPage'><img src='~@/assets/image/lastpage.png' alt='上一页'></li>
      <li @click='nextPage'><img src='~@/assets/image/nextpage.png' alt='下一页'></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: ['pages', 'curpage'],
  data() {
    return {
      clickpage: 0
    }
  },
  methods: {
    lastPage() {
      this.clickpage = this.curpage - 1 > 0 ? (this.curpage - 1) : 1;
      this.$emit('func', this.clickpage);
    },
    nextPage() {
      this.clickpage = (this.curpage + 1 <= this.pages) ? (this.curpage + 1) : this.pages;
      this.$emit('func', this.clickpage);
    },
    getclickPage(e) {
      if (e.keyCode === 13) {
        let page = e.target.value;
        if (page <= 0) {
          page = 1;
        } else if (page > this.pages) {
          page = this.pages;
        }
        this.clickpage = page;
        this.$emit('func', this.clickpage);
      }
    }
  }
}
</script>
<style scoped>
  .pagechange {
    position: fixed;
    bottom: 0;
    right: 2%;
    list-style: none;
    display: flex;
  }
  .pagechange img:hover {
    cursor: pointer;
  }
  .inputpage {
    line-height: 32px;
  }
  .inputpage input {
    border-radius: 12px;
    border: 1px solid;
    width: 35px;
    height: 20px;
    padding-left: 5px;
  }
  .inputpage input:hover {
    border-color: #42b983;
  }
</style>
