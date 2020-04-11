<template>
	<div class="col-lg-5 p-2 m-1 justify-content-center d-flex">
		<div class="container">
			<form @submit.prevent="changeNames">
				<div class="form-group row">
					<label for="firstName" class="col-sm-2 col-form-label">
						Име
					</label>
					<div class="col-sm-10">
						<input
							name="firstName"
							type="text"
							class="form-control"
							id="firstName"
							value=""
							placeholder="Моля, въведете име"
							v-model="firstName"
							@blur="$v.firstName.$touch"
							:class="{
								'is-invalid': $v.firstName.$error,
								'is-valid': !$v.firstName.$invalid
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
							type="text"
							class="form-control"
							id="lastName"
							value=""
							placeholder="Моля, въведете фамилия"
							v-model="lastName"
							@blur="$v.lastName.$touch"
							:class="{
								'is-invalid': $v.lastName.$error,
								'is-valid': !$v.lastName.$invalid
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
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { helpers } from 'vuelidate/lib/validators';

const namesRegEx = helpers.regex('namesRegEx', /^[А-Яа-яA-Za-z\-']{2,}$/);

export default {
	name: 'NamesChange',
	mixins: [validationMixin],
	data() {
		return {
			firstName: '',
			lastName: ''
		};
	},
	methods: {
		changeNames() {
			this.$v.firstName.$touch();
			this.$v.lastName.$touch();
			if (this.$v.firstName.$error || this.$v.lastName.$error) {
				this.$emit('loadingChange', false);
				this.$v.$reset();
				return;
			} else {
				this.$emit('namesChangeHandler', `${this.firstName} ${this.lastName}`);
				this.firstName = '';
				this.lastName = '';
				this.$v.$reset();
			}
		}
	},
	validations: {
		firstName: {
			required,
			namesRegEx
		},
		lastName: {
			required,
			namesRegEx
		}
	}
};
</script>
