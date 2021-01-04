import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


Vue.use(Vuesax, {
  // options here
});
