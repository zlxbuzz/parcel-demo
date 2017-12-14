import app from './app.vue'
import router from './router'

import './index.less'

window.onload = function(){
  new Vue({
    router,
    el: 'app',
    components: {
      app
    }
  });
}

