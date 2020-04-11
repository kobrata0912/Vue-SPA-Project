<template>
	<div class="tab-pane container fade col-12 border" id="dimensions">
		<h1 class="display-3 justify-content-center d-flex">
			Размери
		</h1>
		<h3 class="display-4 justify-content-center d-flex">
			<small>
				Изглед отстрани
			</small>
		</h3>
		<img class="rounded mx-auto d-block p-2" :src="model.dimensions.sideView" />
		<h3 class="display-4 justify-content-center d-flex">
			<small>
				Изглед отгоре
			</small>
		</h3>
		<img class="rounded mx-auto d-block p-2" :src="model.dimensions.topView" />
		<h3 class="display-4 justify-content-center d-flex">
			<small>
				Изглед отпред и отзад
			</small>
		</h3>
		<img
			class="rounded mx-auto d-block p-2"
			:src="model.dimensions.frontAndBackView"
		/>
	</div>
</template>

<script>
export default {
	name: 'Dimensions',
	props: {
		model: {
			type: Array,
			required: true
		}
	}
};
</script>
