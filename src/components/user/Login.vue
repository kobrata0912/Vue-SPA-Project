<template>
	<div class="container pt-5">
		<div class="row">
			<div class="col-sm"></div>
			<div class="col-sm border shadow-lg p-3 mb-5 bg-white rounded">
				<div class="row"></div>
				<form @submit.prevent="loginHandler">
					<div class="form-group">
						<label for="email" class="h4">Имейл</label>
						<input
							name="email"
							placeholder="Valid GMAIL account"
							type="text"
							class="form-control"
							id="email"
							v-model="email"
							@blur="$v.email.$touch"
							:class="{
								'is-invalid': $v.email.$error,
								'is-valid': !$v.email.$invalid,
							}"
							autocomplete="off"
						/>
					</div>
					<div
						class="alert alert-danger alert-dismissible fade show"
						v-if="$v.email.$dirty && $v.email.$invalid"
					>
						Моля, въведете валиден Gmail имейл!
					</div>

					<div class="form-group">
						<label for="password" class="h4">Парола</label>
						<input
							name="password"
							placeholder="Password > 8 characters"
							type="password"
							class="form-control"
							id="password"
							v-model="password"
							@blur="$v.password.$touch"
							:class="{
								'is-invalid': $v.password.$error,
								'is-valid': !$v.password.$invalid,
							}"
						/>
					</div>
					<div
						class="alert alert-danger alert-dismissible fade show"
						v-if="$v.password.$dirty && $v.password.$invalid"
					>
						Моля, въведете валидна парола!
					</div>

					<button :disabled="$v.email.$invalid || $v.password.$invalid" class="btn btn-primary">
						<h5>Вход</h5>
					</button>
				</form>
				<div class="row">
					<div class="container" v-if="loading">
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
				</div>
			</div>
			<div class="col-sm"></div>
		</div>
	</div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { helpers } from 'vuelidate/lib/validators';

const emailRegEx = helpers.regex('emailRegEx', /^[a-zA-Z0-9.-_]{3,}@gmail.com$/);
const passwordRegEx = helpers.regex('passwordRegEx', /^[A-Za-z0-9.-_]{8,}$/);

export default {
	name: 'Login',
	mixins: [validationMixin],
	data() {
		return {
			email: '',
			password: '',
			loading: false,
		};
	},
	validations: {
		email: {
			required,
			emailRegEx
		},
		password: {
			required,
			passwordRegEx,
		},
	},
	methods: {
		loginHandler() {
			this.loading = true;
			this.$v.$touch();
			if (this.$v.$error) {
				return;
			}
			console.log('Login successfull');
			setTimeout(() => {
				this.loading = false;
			}, 3000)
		},
	},
};
</script>

<style></style>
