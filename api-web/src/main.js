import Vue from 'vue'
import '@/assets/css/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './routes'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
