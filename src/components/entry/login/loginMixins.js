/**
 * login component 的公用方法
 */
import axios from 'axios';
export default {
  data() {
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    loginOpt(){
      axios
        .post('/loginOpt')
        .then(response => (this.info = response))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    }
  }
}
