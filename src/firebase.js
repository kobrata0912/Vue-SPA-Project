import { firebase } from "@firebase/app";
import store from './plugins/store'
import "@firebase/firestore";

export const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyB4zD7vjAq81eI8rlNNa9ZukAI2_8B37S0',
	authDomain: 'audiunofficialwebsite.firebaseapp.com',
	databaseURL: 'https://audiunofficialwebsite.firebaseio.com',
	projectId: 'audiunofficialwebsite',
	storageBucket: 'audiunofficialwebsite.appspot.com',
	messagingSenderId: '928209935191',
	appId: '1:928209935191:web:9fa1091afd877b00927c12',
	measurementId: 'G-VWJ6TM23F9',
});

firebase.auth().onAuthStateChanged((user) => {
	store.dispatch('fetchUser', user);
	setTimeout(() => {
		store.dispatch('fetchUser', user);
	}, 1000);
});

export const db = firebaseApp.firestore();
