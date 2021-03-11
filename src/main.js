import Vue from "vue";
import App from "./App.vue";
import VueNativeNotification from 'vue-native-notification'

Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
