// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入ElementUI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入MintUI组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


//引入mui的css
import '../static/mui/dist/css/mui.css';

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//引入百度地图Api
import BaiduMap from 'vue-baidu-map'

//配置axios 实现跨域请求8088端口下的node服务器
import axios from 'axios'
axios.defaults.withCredentials = true; //跨域保存session有用
axios.defaults.baseURL = "http://localhost:8088";
Vue.prototype.$reqs = axios;

//全局使用
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥WfCZnyY52qYDsbFHxiaIvG3oheWPBQDZ
  ak:'WfCZnyY52qYDsbFHxiaIvG3oheWPBQDZ'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//定义remoteScript标签
Vue.component('remote-script', {

  render: function (createElement) {
    var self = this;
    return createElement('script', {
      attrs: {
        type: 'text/javascript',
        src: this.src
      },
      on: {
        load: function (event) {
          self.$emit('load', event);
        },
        error: function (event) {
          self.$emit('error', event);
        },
        readystatechange: function (event) {
          if (this.readyState == 'complete') {
            self.$emit('load', event);
          }
        }
      }
    });
  },

  props: {
    src: {
      type: String,
      required: true
    }
  }
});
