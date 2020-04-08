import { db, firebaseApp } from '../firebase';
import { mapGetters } from 'vuex';

const repairsMixin = {
	data() {
		return {
			repairs: [],
		};
	},
	computed: {
		...mapGetters({
			user: 'user',
		}),
	},
	methods: {
		// async getRepairs() {
		// 	console.log(db.collection('repairs', (ref) =>
		// 		ref.where('email', '==', this.userEmail)
		// 	).snapshotChanges())
		// },
		// createRepair() {},
	},
	firestore() {
		return {
			repairs: db.collection('repairs').where('email', '==', firebaseApp.auth().currentUser.email),
		};
	},
};
export default repairsMixin;
