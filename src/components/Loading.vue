<template>
  <div>
    wait plz
  </div>
</template>

<script>
import {mapActions} from 'vuex';


export default {
  name:"Loading",
  methods:mapActions(['finalLogin']),
  created(){
    this.finalLogin();
  }
}
</script>

<style scoped>

</style>
