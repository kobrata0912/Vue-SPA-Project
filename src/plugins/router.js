import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../plugins/store';

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Contacts from '@/components/static/Contacts.vue';
import Login from '@/components/user/Login.vue';
import Register from '@/components/user/Register.vue';
import Profile from '@/components/user/Profile.vue';
import News from '@/components/News.vue';
import Configurator from '@/components/Configurator.vue';
import Repairs from '@/components/Repairs.vue';
import Carlist from '@/components/Carlist.vue';
import NotFound from '@/components/static/Not-found.vue';

async function isAuth() {
	return await store.getters['user'].loggedIn;
}

const routes = [
	{ path: '/home', name: 'Home', component: Home },
	{ path: '/aboutus', name: 'About', component: About },
	{ path: '/contacts', name: 'Contacts', component: Contacts },
	{
		path: '/user/login',
		name: 'Login',
		component: Login,
		beforeEnter: async (to, from, next) => {
			if (isAuth) {
				next({ path: '/home' });
			} else {
				next();
			}
		}
	},
	{
		path: '/user/register',
		name: 'Register',
		component: Register,
		beforeEnter: async (to, from, next) => {
			if (isAuth) {
				next({ path: '/home' });
			} else {
				next();
			}
		}
	},
	{
		path: '/user/profile',
		name: 'Profile',
		component: Profile,
		beforeEnter: async (to, from, next) => {
			if (isAuth) {
				next({ path: '/user/login' });
			} else {
				next();
			}
		}
	},
	{ path: '/news', name: 'News', component: News },
	{
		path: '/configurator',
		name: 'Configurator',
		component: Configurator,
		beforeEnter: async (to, from, next) => {
			if (isAuth) {
				next({ path: '/user/login' });
			} else {
				next();
			}
		}
	},
	{
		path: '/repairs',
		name: 'Repairs',
		component: Repairs,
		beforeEnter: async (to, from, next) => {
			if (isAuth) {
				next({ path: '/user/login' });
			} else {
				next();
			}
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
