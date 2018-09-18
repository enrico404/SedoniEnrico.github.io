import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'
import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.use(Vue2TouchEvents);


Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({

  routes: Routes


});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
