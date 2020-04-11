<template>
	<div class="row justify-content-center d-flex">
		<div class="col-lg-5 p-2 m-1 justify-content-center d-flex">
			<div class="container">
				<form @submit.prevent="changePassword">
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
									'is-valid': !$v.password.$invalid
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
									'is-valid': !$v.rePassword.$invalid
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
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, sameAs } from 'vuelidate/lib/validators';
import { helpers } from 'vuelidate/lib/validators';

const passwordRegEx = helpers.regex('passwordRegEx', /^[A-Za-z0-9.-_]{8,}$/);

export default {
	name: 'PasswordChange',
	mixins: [validationMixin],
	data() {
		return {
			password: '',
			rePassword: ''
		};
	},
	methods: {
		changePassword() {
			this.$emit('loadingChange', true);
			this.$v.password.$touch();
			this.$v.rePassword.$touch();
			if (this.$v.password.$error || this.$v.rePassword.$error) {
				this.$emit('loadingChange', false);
				this.$v.$reset();
				return;
			} else {
				this.$emit('passwordChangeHandler', this.password);
				this.password = '';
				this.rePassword = '';
				this.$v.$reset();
			}
		}
	},
	validations: {
		password: {
			required,
			passwordRegEx
		},
		rePassword: {
			required,
			passwordRegEx,
			sameAs: sameAs('password')
		}
	}
};
</script>
