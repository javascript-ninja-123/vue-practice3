import ImgurCenter from '../../util/imgur';
import {router} from '../../router';


const state = {
  images:[]
}

const getters = {
  getImages(state){
    return state.images
  }
}

const actions = {
  async fetchImages({commit,rootState}){
    const {token} = rootState.auth;
    const images = await ImgurCenter.getImages(token)
    commit('setImages',images)
  },
  async uploadImages({rootState},images){
    const {token} = rootState.auth;
    await ImgurCenter.uploadImages(token,images);
    router.push('/')
  }
}

const mutations = {
  setImages(state,images){
    state.images = images
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
