import { db } from '../firebase';

const carlistMixin = {
	data() {
		return {
            carModel: '',
			carlist: [],
		};
	},
	firestore() {
		return {
			carlist: db.collection('cars').where('modelName', "==", this.carModel)
		};
	},
};
export default carlistMixin;
