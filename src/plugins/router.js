import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../plugins/store';

import Home from '@/components/Home.vue';
import About from '@/components/static/About.vue';
import Contacts from '@/components/static/Contacts.vue';
import Login from '@/components/user/Login.vue';
import Register from '@/components/user/Register.vue';
import Profile from '@/components/user/profile/Profile.vue';
import News from '@/components/News.vue';
import Configurator from '@/components/Configurator.vue';
import Repairs from '@/components/Repairs.vue';
import Carlist from '@/components/Carlist.vue';
import NotFound from '@/components/static/Not-found.vue';

async function isAuth() {
	return await store.getters.isLoggedIn;
}

const routes = [
	{ path: '/home', name: 'Home', component: Home },
	{ path: '/aboutus', name: 'About', component: About },
	{ path: '/contacts', name: 'Contacts', component: Contacts },
	{
		path: '/user/login',
		name: 'Login',
		component: Login,
		beforeEnter: (to, from, next) => {
			setTimeout(async () => {
				if (await isAuth()) {
					next({ path: '/home' });
				} else {
					next();
				}
			}, 1000);
		}
	},
	{
		path: '/user/register',
		name: 'Register',
		component: Register,
		beforeEnter: (to, from, next) => {
			setTimeout(async () => {
				if (await isAuth()) {
					next({ path: '/home' });
				} else {
					next();
				}
			}, 1000);
		}
	},
	{
		path: '/user/profile',
		name: 'Profile',
		component: Profile,
		beforeEnter: (to, from, next) => {
			setTimeout(async () => {
				if (!(await isAuth())) {
					next({ path: '/user/login' });
				} else {
					next();
				}
			}, 1000);
		}
	},
	{ path: '/news', name: 'News', component: News },
	{
		path: '/configurator',
		name: 'Configurator',
		component: Configurator,
		beforeEnter: (to, from, next) => {
			setTimeout(async () => {
				if (!(await isAuth())) {
					next({ path: '/user/login' });
				} else {
					next();
				}
			}, 1000);
		}
	},
	{
		path: '/repairs',
		name: 'Repairs',
		component: Repairs,
		beforeEnter: (to, from, next) => {
			setTimeout(async () => {
				if (!(await isAuth())) {
					next({ path: '/user/login' });
				} else {
					next();
				}
			}, 1000);
		}
	},
	{ path: '/models/:modelName', name: 'Models', component: Carlist },
	{ path: '*', name: 'NotFound', component: NotFound }
];

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes
});
