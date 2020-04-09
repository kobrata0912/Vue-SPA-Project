import { db, firebaseApp } from '../firebase';

const repairsMixin = {
	data() {
		return {
			repairs: [],
			allRepairs: []
		};
	},
	methods: {
		firebaseCreateRepair: async function() {
			return await this.$firestore.allRepairs.add({
				name: this.fullName,
				email: this.email,
				phone: this.phoneNumber,
				location: this.location,
				description: this.description,
			});
		},
		firebaseDeleteRepair: async function(repair) {
			return await this.$firestore.allRepairs.doc(repair['.key']).delete();
		}
	},
	firestore() {
		return {
			repairs: db
				.collection('repairs')
				.where('email', '==', firebaseApp.auth().currentUser.email),
			allRepairs: db.collection('repairs')
		};
	},
};
export default repairsMixin;
