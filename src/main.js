import Vue from 'vue';
import App from './App.vue';
import router from '@/plugins/router';
import store from './plugins/store';
import VueToastr from 'vue-toastr';
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false;
Vue.use(VueFirestore);
Vue.use(VueToastr, {
	defaultTimeout: 3000,
	defaultPosition: 'toast-bottom-right',
});

new Vue({
	render: (h) => h(App),
	router,
  store,
}).$mount('#app');
