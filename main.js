import Vue from 'vue'
import App from './App'
import mixins from '@/mixins'
import store from './store/index.js'

Vue.mixin(mixins)

Vue.config.productionTip = false;
Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
