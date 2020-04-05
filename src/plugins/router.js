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
    { path: '/home', component: Home },
    { path: '/aboutus', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/user/login', component: Login },
    { path: '/user/register', component: Register },
    { path: '/user/profile', component: Profile },
    { path: '/news', component: News },
    { path: '/configurator', component: Configurator },
    { path: '/repairs', component: Repairs },
    { path: '/models/:modelName', component: Carlist }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
});