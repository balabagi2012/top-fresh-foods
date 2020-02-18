import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.scss';
import './registerServiceWorker'
Vue.use(ElementUI);
Vue.config.productionTip = true
import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
