import Vue from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(VueApexCharts);
Vue.use(Buefy);
Vue.component('apex-chart', VueApexCharts);

new Vue({
  render: h => h(App),
}).$mount('#app')
