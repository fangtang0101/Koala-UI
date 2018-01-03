import Vue from 'vue'
import App from './App.vue'

Vue.prototype.$headerBackground = 'blue'

new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App
  },
})