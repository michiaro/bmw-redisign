import 'normalize.css';
import 'swiper/dist/css/swiper.css';
import '../styles/main.scss';

import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'


Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App)
}).$mount('#app')
