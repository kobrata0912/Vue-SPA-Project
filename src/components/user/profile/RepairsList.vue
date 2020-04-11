<template>
	<div class="col-lg-5 p-2 m-1 border">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 justify-content-center d-flex">
					<h4>Вашите заявки за сервизно обслужване</h4>
				</div>
			</div>
			<template v-if="repairs[0]">
				<div class="row" v-for="(repair, i) in repairs" :key="i">
					<div class="col-lg-12">
						<div class="container-fluid border shadow-sm my-2 p-2">
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
							<div class="row">
								<div class="col-lg-12 justify-content-center d-flex">
									<button
										type="button"
										class="btn btn-primary"
										@click="deleteRepair(repair)"
									>
										Изтрий заявката
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="col-lg-12">
					<div class="container-fluid border shadow-sm my-2 p-2">
						<div class="row">
							<div class="col-lg-12 justify-content-center d-flex">
								<h5>Нямате подадени заявки за сервиз!</h5>
							</div>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RepairsList',
	props: { repairs: Array },
	methods: {
		deleteRepair(repair) {
			this.$emit('loadingChange', true);
			if (!repair) {
				this.$emit('loadingChange', false);
				return;
			} else {
				this.$emit('deleteRepairHandler', repair);
			}
		}
	}
};
</script>
