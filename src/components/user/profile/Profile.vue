<template>
	<div class="container-fluid">
		<div class="container mt-5" v-if="loading">
			<div class="row">
				<div id="loader">
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="loading"></div>
				</div>
			</div>
		</div>
		<passwordChange
			@passwordChangeHandler="passwordChangeHandler($event)"
			@loadingChange="loading = $event"
		></passwordChange
		>>
		<div class="row justify-content-center d-flex">
			<namesChange
				@namesChangeHandler="namesChangeHandler($event)"
				@loadingChange="loading = $event"
			></namesChange>
			<repairsList
				:repairs="repairs"
				@deleteRepairHandler="deleteRepairHandler($event)"
				@loadingChange="loading = $event"
			></repairsList>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import authMixin from '../../../mixins/authMixin';
import repairsMixin from '../../../mixins/repairsMixin';
import notificationsMixin from '../../../mixins/notificationsMixin';
import store from '../../../plugins/store';
import PasswordChange from './PasswordChange.vue';
import NamesChange from './NamesChange.vue';
import RepairsList from './RepairsList.vue';

export default {
	name: 'profile',
	mixins: [authMixin, notificationsMixin, repairsMixin],
	components: { PasswordChange, NamesChange, RepairsList },
	data() {
		return {
			repairs: [],
			loading: true
		};
	},
	methods: {
		async passwordChangeHandler(password) {
			await this.firebaseChangePassword(password)
				.then(async () => {
					await this.firebaseLogOut()
						.then(() => {
							this.loading = false;
							this.successToastr(
								'Успешна смяна на паролата. Моля, влезте отново в профила си!'
							);
							this.$router.replace({ path: '/home' });
						})
						.catch(error => {
							this.loading = false;
							this.errorToastr(error);
						});
				})
				.catch(error => {
					this.loading = false;
					this.errorToastr(error);
				});
		},
		async namesChangeHandler(fullName) {
			await this.firebaseNamesChange(fullName)
				.then(() => {
					this.loading = false;
					store.dispatch('fetchUser', {
						displayName: fullName,
						email: this.user.data.email
					});
					this.successToastr('Успешна смяна на имената!');
				})
				.catch(error => {
					this.loading = false;
					this.errorToastr(error);
				});
		},
		async deleteRepairHandler(repair) {
			await this.firebaseDeleteRepair(repair)
				.then(() => {
					this.loading = false;
					this.successToastr('Успешно премахната заявка');
				})
				.catch(error => {
					this.loading = false;
					this.errorToastr(error);
				});
		}
	},
	computed: {
		...mapGetters({
			user: 'user'
		})
	},
	watch: {
		repairs: function() {
			this.loading = false;
		}
	}
};
</script>
