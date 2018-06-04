import Vue from 'vue';
import {mapActions} from 'vuex';

const isAuthenticated = component => {
  return Vue.component('isAuthenticated', {
    render(createElement){
      return createElement(component)
    },
    methods:mapActions(['isLoggedIn']),
    created(){
      if(this.isLoggedIn){

      }
    }
  })
}


export default isAuthenticated;
