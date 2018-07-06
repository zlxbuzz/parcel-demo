import Vue from 'vue/dist/vue.esm.js'
import './index.less'
import app from './app.vue'
import router from './router.js'

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
window.onload = function(){
  new Vue({
    router,
    el: 'app',
    components: {
      app
    }
  });
}

console.log(2)
