<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 justify-content-center d-flex">
				<h1 class="display-1">
					ERROR 404 - Page not found
				</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-12 justify-content-center d-flex">
				<h3 class="display-3">
					You will be redirected to the Home Page in 5 seconds!
				</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
	mounted() {
		setTimeout(() => {
			this.$router.replace({path: '/home'})
		}, 5000)
	}
};
</script>
