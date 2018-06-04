<template>
  <header class='header'>
    <div class='logo'>
        <router-link to='/' class='logo__text'>
          Lorem
        </router-link>
    </div>
    <ul class='list list-justfy' v-if="!isLoggedIn">
      <li  class='list__item'>
        <a @click="login">Login</a>
      </li>
    </ul>
    <ul class='list' v-else>
      <li class='list__item'>
        <router-link to='/gallery'>Gallery</router-link>
      </li>
      <li  class='list__item'>
        <router-link to='/upload'>Upload</router-link>
      </li>
      <li  class='list__item'>
        <a @click="logout">Logout</a>
      </li>
    </ul>
  </header>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name:"Header",
  methods:mapActions(['login','logout']),
  computed:mapGetters(['isLoggedIn'])
}
</script>

<style scoped>
  .header{
    width:100vw;
    height:5rem;
    background-color:#eee;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    padding:0.3rem 2rem;
    margin-bottom:2rem;
  }
  .logo{
    flex:1;
  }
  .logo__text{
    font-size:2rem;
  }
  .list{
    list-style:none;
    padding:0;
    margin:0;
    display: flex;
    flex:0 0 200px;
    justify-content:space-between;
    align-items:center;
  }
  .list-justfy{
    justify-content:center;
  }
  a{
    cursor:pointer;
  }

  @media only screen and (max-width: 600px){
    .header{
      flex-direction:column;
      height:100%;
      padding:1rem 0;
    }
    .list{
      width:70vw;
      margin:0 auto;
      margin-top:1rem;
      flex:0;
    }
  }

</style>
