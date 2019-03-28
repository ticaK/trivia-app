import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import TriviaApp from './components/TriviaApp.vue'
import Chuck from './components/Chuck.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.config.productionTip = false


const routes = [
  {path:'/', component:TriviaApp},
  {path:'/chuck', component:Chuck},
]

const router = new VueRouter({
  routes: routes,
  mode:'history'
  
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

