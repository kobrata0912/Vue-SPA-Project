import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../plugins/store';

import Home from '@/components/Home.vue';
const About = () => import(/* webpackChunkName: "About" */ "../components/static/About.vue");
const Contacts = () => import(/* webpackChunkName: "Contacts" */  "../components/static/Contacts.vue");
const Login = () => import(/* webpackChunkName: "Login" */ "../components/user/Login.vue");
const Register = () => import(/* webpackChunkName: "Register" */ "../components/user/Register.vue");
const Profile = () => import(/* webpackChunkName: "Profile" */ "../components/user/profile/Profile.vue");
const News = () => import(/* webpackChunkName: "News" */ "../components/News.vue");
const Configurator = () => import(/* webpackChunkName: "Configurator" */ "../components/Configurator.vue");
const Repairs = () => import(/* webpackChunkName: "Repairs" */ "../components/Repairs.vue");
const Carlist = () => import(/* webpackChunkName: "Carlist" */ "../components/Carlist.vue");
const NotFound = () => import(/* webpackChunkName: "NotFound" */ "../components/static/Not-found.vue");

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
