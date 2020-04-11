<template>
	<div class="tab-pane container fade col-12 border" id="extras">
		<h1 class="display-3 justify-content-center d-flex">
			{{ model.extras.extrasHeader }}
		</h1>
		<h3>
			<small>
				{{ model.extras.extrasDescription }}
			</small>
		</h3>
		<div v-for="(paragraph, e) in model.extras.description" :key="e">
			<h1 class="display-4 justify-content-center d-flex">
				{{ paragraph.heading }}
			</h1>
			<h3>
				<small>
					{{ paragraph.description }}
				</small>
			</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Extras',
	props: {
		model: {
			type: Array,
			required: true
		}
	}
};
</script>
