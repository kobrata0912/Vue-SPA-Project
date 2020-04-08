import Vue from 'vue';
import VueRouter from 'vue-router';  

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

const routes =  [
    { path: '/home', name: 'Home', component: Home },
    { path: '/aboutus', name: 'About', component: About },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/user/login', name: 'Login', component: Login },
    { path: '/user/register', name: 'Register', component: Register },
    { path: '/user/profile', name: 'Profile', component: Profile },
    { path: '/news', name: 'News', component: News },
    { path: '/configurator', name: 'Configurator', component: Configurator },
    { path: '/repairs', name: 'Repairs', component: Repairs },
    { path: '/models/:modelName', name: 'Models', component: Carlist }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
});