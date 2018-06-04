import qs from 'qs';
import axios from 'axios';
const BASE_URL = 'https://api.imgur.com';
const CLIENT_ID = '929875758ae6bc5';
// const CLIENT_SECRET = 'ff6e499555955a5f430af9777053e112d660dcd9';



class ImgurCenter{
  static async login(){
    window.location = `${BASE_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`
  }
  static finalLogin(){
    const result = qs.parse(window.location.hash)
    const token = result['#access_token'];
    localStorage.setItem('access_token',token);
    return token;
  }
  static logout(){
    localStorage.removeItem('access_token')
  }
  static async getImages(token){
    const URL = `${BASE_URL}/3/account/me/images`;
    const {data} = await axios.get(URL,{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    return data.data;
  }
  static async uploadImages(token,images){
    const URL = `${BASE_URL}/3/image`;
    const promises = Array.from(images).map(async (value) => {
      const formData = new FormData();
      formData.append('image',value)
        await axios.post(URL,formData,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
    })
    await Promise.all(promises)
  }
}


export default ImgurCenter;
