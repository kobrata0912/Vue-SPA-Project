import { db } from '../firebase';

const newsMixin = {
	data() {
		return {
			news: [],
		};
	},
	firestore() {
		return {
			news: db.collection('news').orderBy('date', 'desc'),
		};
	},
};
export default newsMixin;
