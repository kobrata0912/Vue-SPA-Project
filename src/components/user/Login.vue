<template>
  <div>
    <div class="container pt-5">
	<div class="row">
		<div class="col-sm"></div>
		<div class="col-sm border shadow-lg p-3 mb-5 bg-white rounded">
			<div class="row"></div>

			<form>
				<div class="form-group">
					<label for="email" class="h4">Имейл</label>
					<input
						name="email"
						placeholder="Valid GMAIL account"
						type="text"
						class="form-control"
						id="email"
						autocomplete="off"
						required
					/>
				</div>
				<div
					class="alert alert-danger alert-dismissible fade show"
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
						required
					/>
				</div>
				<div
					class="alert alert-danger alert-dismissible fade show"
				>
					Моля, въведете валидна парола!
				</div>

				<button class="btn btn-primary">
					<h5>Вход</h5>
				</button>
			</form>
		</div>
		<div class="col-sm"></div>
	</div>
</div>

  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>

<style>

</style>