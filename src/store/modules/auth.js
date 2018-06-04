import ImgurCenter from '../../util/imgur';
import {router} from '../../router';

const state = {
  token:localStorage.getItem('access_token')
}

const getters = {
  isLoggedIn(state){
    return !!state.token
  }
}

const actions = {
  async login(){
     await ImgurCenter.login();
  },
  finalLogin({commit}){
    const token = ImgurCenter.finalLogin()
    commit('setToken',token);
    router.push('/')
  },
  logout({commit}){
    ImgurCenter.logout();
    commit('setToken',null)
  }
}

const mutations = {
  setToken(state,token){
    state.token = token;
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
