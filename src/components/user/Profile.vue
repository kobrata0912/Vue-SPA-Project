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
		<div class="row justify-content-center d-flex">
			<div class="col-lg-5 p-2 m-1 justify-content-center d-flex">
				<div class="container">
					<form @submit.prevent="passwordChangeHandler">
						<div class="form-group row">
							<label for="password" class="col-sm-2 col-form-label">
								Нова парола
							</label>
							<div class="col-sm-10">
								<input
									name="password"
									type="password"
									class="form-control"
									id="password"
									value=""
									placeholder="Моля, въведете нова парола"
									v-model="password"
									@blur="$v.password.$touch"
									:class="{
										'is-invalid': $v.password.$error,
										'is-valid': !$v.password.$invalid,
									}"
								/>
							</div>
						</div>
						<div
							class="alert alert-danger alert-dismissible fade show"
							v-if="$v.password.$dirty && $v.password.$invalid"
						>
							Моля, въведете валидна парола!
						</div>
						<div class="form-group row">
							<label for="rePassword" class="col-sm-2 col-form-label">
								Нова парола
							</label>
							<div class="col-sm-10">
								<input
									name="rePassword"
									type="password"
									class="form-control"
									id="rePassword"
									value=""
									placeholder="Моля, въведете пак новата парола"
									v-model="rePassword"
									@blur="$v.rePassword.$touch"
									:class="{
										'is-invalid': $v.rePassword.$error,
										'is-valid': !$v.rePassword.$invalid,
									}"
								/>
							</div>
						</div>
						<div
							class="alert alert-danger alert-dismissible fade show"
							v-if="$v.rePassword.$dirty && $v.rePassword.$invalid"
						>
							Двете пароли не съвпадат!
						</div>

						<button
							:disabled="$v.password.$invalid || $v.rePassword.$invalid"
							class="btn btn-primary"
						>
							<h5>Смяна на паролата</h5>
						</button>
					</form>
				</div>
			</div>
			<div class="col-lg-5 p-2 m-1 border justify-content-center d-flex">
				TODO: Saved configurations
			</div>
		</div>
		<div class="row justify-content-center d-flex">
			<div class="col-lg-5 p-2 m-1 justify-content-center d-flex">
				<div class="container">
					<form @submit.prevent="namesChangeHandler">
						<div class="form-group row">
							<label for="firstName" class="col-sm-2 col-form-label">
								Име
							</label>
							<div class="col-sm-10">
								<input
									name="firstName"
									type="firstName"
									class="form-control"
									id="firstName"
									value=""
									placeholder="Моля, въведете име"
									v-model="firstName"
									@blur="$v.firstName.$touch"
									:class="{
										'is-invalid': $v.firstName.$error,
										'is-valid': !$v.firstName.$invalid,
									}"
								/>
							</div>
						</div>
						<div
							class="alert alert-danger alert-dismissible fade show"
							v-if="$v.firstName.$dirty && $v.firstName.$invalid"
						>
							Моля, въведете валиднo име!
						</div>
						<div class="form-group row">
							<label for="lastName" class="col-sm-2 col-form-label">
								Фамилия
							</label>
							<div class="col-sm-10">
								<input
									name="lastName"
									type="password"
									class="form-control"
									id="lastName"
									value=""
									placeholder="Моля, въведете фамилия"
									v-model="lastName"
									@blur="$v.lastName.$touch"
									:class="{
										'is-invalid': $v.lastName.$error,
										'is-valid': !$v.lastName.$invalid,
									}"
								/>
							</div>
						</div>
						<div
							class="alert alert-danger alert-dismissible fade show"
							v-if="$v.lastName.$dirty && $v.lastName.$invalid"
						>
							Моля, въведете валиднo име!
						</div>
						<button
							:disabled="$v.firstName.$invalid || $v.lastName.$invalid"
							class="btn btn-primary"
						>
							<h5>Смяна на имената</h5>
						</button>
					</form>
				</div>
			</div>
			<div class="col-lg-5 p-2 m-1 border">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 justify-content-center d-flex">
							<h4>Вашите заявки за сервизно обслужване</h4>
						</div>
					</div>
					<!-- <div class="row" *ngFor="let repair of repairRequests; let i = index">
						<div class="col-lg-12">
							<div class="container-fluid border shadow-sm my-2">
								<div class="row">
									<div class="col-lg-12 justify-content-center d-flex">
										<h5>{{ i + 1 }}. Заявка за сервиз {{ repair.location }}</h5>
									</div>
								</div>
								<div class="row">
									<div class="col-lg-12 justify-content-center d-flex">
										<h5>Описание: {{ repair.description }}</h5>
									</div>
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, sameAs } from 'vuelidate/lib/validators';
import { helpers } from 'vuelidate/lib/validators';

const passwordRegEx = helpers.regex('passwordRegEx', /^[A-Za-z0-9.-_]{8,}$/);
const namesRegEx = helpers.regex('namesRegEx', /^[А-Яа-яA-Za-z\-']{2,}$/);

export default {
	name: 'profile',
	mixins: [validationMixin],
	data() {
		return {
			firstName: '',
			lastName: '',
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
		passwordChangeHandler() {
			this.loading = true;
			if (this.$v.password.$error || this.$v.rePassword.$error) {
				return;
			}
			console.log('Password change successfull');
			this.password = '';
			this.rePassword = '';
			this.$v.$reset();
			setTimeout(() => {
				this.loading = false;
			}, 3000);
		},
		namesChangeHandler() {
			this.loading = true;
			if (this.$v.firstName.$error || this.$v.lastName.$error) {
				return;
			}
			console.log('Names change successfull');
			this.firstName = '';
			this.lastName = '';
			this.$v.$reset();
			setTimeout(() => {
				this.loading = false;
			}, 3000);
		},
	},
};
</script>
