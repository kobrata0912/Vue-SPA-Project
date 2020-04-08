import Vue from 'vue'
import App from './App.vue'
import router from '@/plugins/router'
import * as firebase from "firebase";
import store from "./plugins/store";
import VueToastr from 'vue-toastr'

Vue.config.productionTip = false;
Vue.use(VueToastr, {
  defaultTimeout: 3000,
  defaultPosition: "toast-bottom-right",
})
const configOptions = {
  apiKey: "AIzaSyB4zD7vjAq81eI8rlNNa9ZukAI2_8B37S0",
  authDomain: "audiunofficialwebsite.firebaseapp.com",
  databaseURL: "https://audiunofficialwebsite.firebaseio.com",
  projectId: "audiunofficialwebsite",
  storageBucket: "audiunofficialwebsite.appspot.com",
  messagingSenderId: "928209935191",
  appId: "1:928209935191:web:9fa1091afd877b00927c12",
  measurementId: "G-VWJ6TM23F9"
  };

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
  setTimeout(() => {
    store.dispatch("fetchUser", user);
  }, 1000)

});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
