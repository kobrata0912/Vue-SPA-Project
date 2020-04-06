<template>
	<div class="container pt-5">
		<div class="row">
			<div class="col"></div>
			<div class="col-8 border shadow-lg p-3 mb-5 bg-white rounded">
				<form @submit.prevent="registerHandler">
					<div class="row">
						<div class="col">
							<label for="firstName" class="h4">Име</label>
							<input
								name="firstName"
								type="text"
								class="form-control"
								id="firstName"
								v-model="firstName"
								@blur="$v.firstName.$touch"
								:class="{
									'is-invalid': $v.firstName.$error,
									'is-valid': !$v.firstName.$invalid,
								}"
								autocomplete="off"
							/>
						</div>

						<div class="col">
							<label for="lastName" class="h4">Фамилия</label>
							<input
								name="lastName"
								type="text"
								class="form-control"
								id="lastName"
								v-model="lastName"
								@blur="$v.lastName.$touch"
								:class="{
									'is-invalid': $v.lastName.$error,
									'is-valid': !$v.lastName.$invalid,
								}"
								autocomplete="off"
							/>
						</div>
					</div>

					<div class="row">
						<div class="col mt-3">
							<div
								class="alert alert-danger alert-dismissible fade show"
								v-if="$v.firstName.$dirty && $v.firstName.$invalid"
							>
								Моля, въведете валидно име!
							</div>
						</div>
						<div class="col mt-3">
							<div
								class="alert alert-danger alert-dismissible fade show"
								v-if="$v.lastName.$dirty && $v.lastName.$invalid"
							>
								Моля, въведете валидна фамилия!
							</div>
						</div>
					</div>

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
					<div class="form-group">
						<label for="rePassword" class="h4">Повторна парола</label>
						<input
							name="rePassword"
							placeholder="Password > 8 characters"
							type="password"
							class="form-control"
							id="rePassword"
							v-model="rePassword"
							@blur="$v.rePassword.$touch"
							:class="{
								'is-invalid': $v.rePassword.$error,
								'is-valid': !$v.rePassword.$invalid && $v.rePassword.sameAs,
							}"
						/>
					</div>
					<div
						class="alert alert-danger alert-dismissible fade show"
						v-if="$v.rePassword.$dirty && $v.rePassword.$invalid"
					>
						Двете пароли не съвпадат!
					</div>
					<button :disabled="$v.$error" class="btn btn-primary">
						<h5>Регистрация</h5>
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
			<div class="col"></div>
		</div>
	</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, sameAs } from 'vuelidate/lib/validators';
import { helpers } from 'vuelidate/lib/validators';

const emailRegEx = helpers.regex(
	'emailRegEx',
	/^[a-zA-Z0-9.-_]{3,}@gmail.com$/
);
const passwordRegEx = helpers.regex('passwordRegEx', /^[A-Za-z0-9.-_]{8,}$/);
const namesRegEx = helpers.regex('namesRegEx', /^[А-Яа-яA-Za-z\-']{2,}$/);

export default {
	name: 'Register',
	mixins: [validationMixin],
	data() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			rePassword: '',
			loading: false,
		};
	},
	validations: {
		firstName: {
			required,
			namesRegEx,
		},
		lastName: {
			required,
			namesRegEx,
		},
		email: {
			required,
			emailRegEx,
		},
		password: {
			required,
			passwordRegEx,
		},
		rePassword: {
			required,
			passwordRegEx,
			sameAs: sameAs('password'),
		},
	},
	methods: {
		registerHandler() {
			this.loading = true;
			this.$v.$touch();
			if (this.$v.$error) {
				return;
			}
			console.log('Register successfull');
			setTimeout(() => {
				this.loading = false;
			}, 3000);
		},
	},
};
</script>
