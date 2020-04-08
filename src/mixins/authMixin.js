import firebase from 'firebase';
const authMixin = {
	methods: {
		loginHandler() {
			this.loading = true;
			this.$v.$touch();
			if (this.$v.$error) {
				return;
			}
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then((data) => {
					this.loading = false;
                    console.log('Login successfull');
                    console.log(data);
					this.$router.replace({ path: '/home' });
				})
				.catch((err) => {
                    this.error = err.message;
                    this.loading = false;
                    this.$router.replace({ path: '/home' });
				});
		},
		registerHandler() {
			this.loading = true;
			this.$v.$touch();
			if (this.$v.$error) {
				return;
			}
			firebase
				.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then((data) => {
					data.user
						.updateProfile({
							displayName: `${this.firstName} ${this.lastName}`,
						})
						.then((data) => {
							console.log(data);
						});
				})
				.then(() => {
					this.loading = false;
					console.log('Register successfull');
					this.$router.replace({ path: '/home' });
				})
				.catch((err) => {
					this.error = err.message;
				});
		},
	},
};

export default authMixin;
