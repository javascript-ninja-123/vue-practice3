<template>
  <div>
    <Header></Header>
    <router-view
      class='container'
    ></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
      Header
  }
}
</script>

<style scoped>
  .container{
    width:80vw;
    margin:0 auto;
  }
</style>
