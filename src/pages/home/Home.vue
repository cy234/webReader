<template>
  <div>
    <Header @change='handleSearch'></Header>
    <BookList></BookList>
  </div>
</template>

<script>
import Header from './components/Header'
import BookList from './components/BookList'
export default {
  name: 'Home',
  components: {
    Header,
    BookList
  },
  methods: {
    handleSearch (value) {
      window.open(`https://www.baidu.com/s?wd=${value}txt全文下载`);
    }
  }
}
</script>
<style scoped>
</style>
