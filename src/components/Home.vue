<template>
  <div>
    <div v-if="!isLoggedIn">
      Sign in to use this service bro
    </div>
    <ImageList v-else></ImageList>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ImageList from './ImageList';

export default {
  name:"Home",
  computed:mapGetters(['isLoggedIn']),
  components:{
    ImageList
  }
}
</script>

<style scoped>

</style>
