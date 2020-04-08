import firebase from 'firebase';
const authMixin = {
	methods: {
		async firebaseLogin(email, password) {
			return await firebase.auth().signInWithEmailAndPassword(email, password);
		},
		async firebaseRegister(email, password, displayName) {
			return await firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then((data) => {
					data.user
						.updateProfile({
							displayName: displayName,
						})
						.then(() => {});
				});
		},
		async firebaseLogOut() {
			return await firebase.auth().signOut();
		},
		async firebaseChangePassword(newPassword) {
			return await firebase.auth().currentUser.updatePassword(newPassword);
        },
        async firebaseNamesChange(newNames) {
            return await firebase.auth().currentUser.updateProfile({displayName: newNames})

        }
	},
};

export default authMixin;
