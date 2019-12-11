import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


//引入tabbar
import pageFoot from './components/tabbar.vue'
Vue.component('page-foot',pageFoot)
//引入nav
import firstNav from './components/first-nav.vue'
Vue.component('first-nav',firstNav)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
