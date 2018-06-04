<template>
  <div class='upload'>
    <input type="file" multiple accept="image/*" @change="uploadImages($event.target.files)"/>
    <p>drop your file here or click it</p>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name:"Upload",
  methods:mapActions(['uploadImages'])
}
</script>

<style scoped>
  .upload{
    height:40vh;
    border-radius:5px;
    border:2px black dashed;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  input{
    position:absolute;
    width:100%;
    height:100%;
    opacity:0;
    cursor:pointer;
  }
</style>
