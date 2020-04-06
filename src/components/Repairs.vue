<template>
	<div>
		<div class="container-fluid">
	<div class="row">
		<img
			src="/repairs/repairs-picture.jpg"
			width="100%"
			height="563px"
			class="rounded mx-auto d-block"
			alt="Repairs"
		/>
		<span class="h2 display-1 top-left" style="color: white;">
			<strong>
				Заявка за сервиз
			</strong>
		</span>
	</div>
</div>

<div class="row justify-content-center">
	<div class="col-8 m-5 justify-content-center d-flex ">
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
		<div class="container">
			<form @submit.prevent="repairHandler">
				<div class="form-group row">
					<label for="fullName" class="col-sm-2 col-form-label"> Имена </label>
					<div class="col-sm-10">
						<input
							name="fullName"
							type="text"
							class="form-control"
							id="fullName"
							v-model="fullName"
							disabled
						/>
					</div>
				</div>
				<div class="form-group row">
					<label for="email" class="col-sm-2 col-form-label"> Имейл </label>
					<div class="col-sm-10">
						<input
							name="email"
							type="text"
							class="form-control"
							id="email"
							v-model="email"
							disabled
						/>
					</div>
				</div>
				<div class="form-group row">
					<label for="phoneNumber" class="col-sm-2 col-form-label">
						Телефон
					</label>
					<div class="col-sm-10">
						<input
							name="phoneNumber"
							type="text"
							class="form-control"
							id="phoneNumber"
							placeholder="Моля, напишете телефон за обратна връзка"
							v-model="phoneNumber"
								@blur="$v.phoneNumber.$touch"
								:class="{
									'is-invalid': $v.phoneNumber.$error,
									'is-valid': !$v.phoneNumber.$invalid,
								}"
						/>
					</div>
				</div>
				<div class="form-group row">
					<label for="location" class="col-sm-2 col-form-label">Сервиз</label>
					<div class="col-sm-10">
						<select
							name="location"
							class="custom-select mr-sm-2"
							id="inlineFormCustomSelect"
							v-model="location"
								@blur="$v.location.$touch"
								:class="{
									'is-invalid': $v.location.$error,
									'is-valid': !$v.location.$invalid,
								}"
						>
							<option value="" disabled>Изберете сервиз...</option>
							<option value="ПОРШЕ СОФИЯ ЗАПАД">ПОРШЕ СОФИЯ ЗАПАД</option>
							<option value="ПОРШЕ СОФИЯ ИЗТОК">ПОРШЕ СОФИЯ ИЗТОК</option>
							<option value="ПОРШЕ ПЛОВДИВ">ПОРШЕ ПЛОВДИВ</option>
							<option value="ПОРШЕ ВАРНА">ПОРШЕ ВАРНА</option>
							<option value="АВТОХИТ 2000">АВТОХИТ 2000</option>
							<option value="ВЕСТАУТО - М">ВЕСТАУТО - М</option>
							<option value="АВТОТЕХНИКА - ПМ ЕООД">АВТОТЕХНИКА - ПМ ЕООД</option>
							<option value="ХОБИ КАР ЕООД">ХОБИ КАР ЕООД</option>
							<option value="АВТОЧОЙС">АВТОЧОЙС</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<label for="description" class="col-sm-2 col-form-label"
							>Повреда</label
						>
						<div class="col-sm-10">
							<textarea
								name="description"
								class="form-control"
								id="description"
								rows="3"
								placeholder="Моля, опишете накратко повредите по автомобила"
								v-model="description"
								@blur="$v.description.$touch"
								:class="{
									'is-invalid': $v.description.$error,
									'is-valid': !$v.description.$invalid,
								}"
							></textarea>
							<div
								class="alert alert-danger alert-dismissible fade show"
								v-if="$v.description.$dirty && $v.description.$invalid"
							>
							Моля, опишете накратко повредите по автомобила
							</div>
						</div>
					</div>
				</div>
				<div class="form-group row">
					<div class="col-sm-10">
						<button :disabled="$v.$invalid" class="btn btn-primary">
							Изпрати заявка
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>

	</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import { helpers } from 'vuelidate/lib/validators';

const phoneNumberRegEx = helpers.regex('phoneNumberRegEx', /^[+0-9 ]{10,}$/);

export default {
	name: 'Repairs',
	mixins: [validationMixin],
	data() {
		return {
			fullName: 'Stefan',
			email: 'asd@gmail.com',
			phoneNumber: '',
			location: '',
			description: '',
			loading: false,
		};
	},
	validations: {
		fullName: {
			required
		},
		email: {
			required
		},
		phoneNumber: {
			required,
			phoneNumberRegEx
		},
		location: {
			required,
		},
		description: {
			required,
			minLength: minLength(10)
		},
	},
	methods: {
		repairHandler() {
			this.loading = true;
			this.$v.$touch();
			if (this.$v.$error) {
				return;
			}
			console.log('Repair sent successfull');
			this.phoneNumber = '';
			this.location = '';
			this.description = '';
			this.$v.$reset();
			setTimeout(() => {
				this.loading = false;
			}, 3000);
		},
	},
};
</script>

<style scoped>
.container-fluid {
	position: relative;
	text-align: center;
}

.top-left {
	position: absolute;
	top: 10%;
	left: 15%;
	transform: translate(-25%, -25%);
}
</style>
