import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = "http://localhost:3000";

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC8Nz1GgAkW3EXutmekuXpnxCJHy5m5Waw',//'AIzaSyC8Nz1GgAkW3EXutmekuXpnxCJHy5m5Waw',
    libraries: 'places'
  }
});
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
