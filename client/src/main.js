import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Date.prototype.getWeek = function () {
  var firstOfYear = new Date(this.getFullYear(), 0, 1);
  return Math.ceil((((this - firstOfYear) / 86400000) + firstOfYear.getDay() + 1) / 7);
};

new Vue({
  render: h => h(App),
}).$mount('#app')
