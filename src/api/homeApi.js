import axios from '../axios/request'

export default {
  getMenuByRole:function(param) {
    return axios.get('queryMenu',param);
  }
}

