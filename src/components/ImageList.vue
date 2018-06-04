<template>
  <div>
    <ul class='image-list'>
      <li v-for="image in getImages" :key="image.id" class='image-list__item'>
        <img :src="image.link" alt="image" class='image-list__image'/>
        <p class='image-list__text'>Posted: {{convertImagePostedTime(image.datetime)}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import moment from 'moment';
export default {
  name:"ImageList",
  computed:{
    ...mapGetters(['getImages']),
  },
  methods:{
    ...mapActions(['fetchImages']),
    convertImagePostedTime(time){
      return moment(time).format('LLL');
    }
  },
  created(){
    this.fetchImages();
  }
}
</script>

<style scoped>
  .image-list{
    list-style:none;
    margin:0;
    padding:0;
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-gap:1rem;
  }
  .image-list__item,
  .image-list__image{
    max-width:100%;
  }
</style>
