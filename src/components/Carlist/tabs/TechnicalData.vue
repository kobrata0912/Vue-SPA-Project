<template>
	<div class="tab-pane container fade col-12 border" id="technicalData">
		<h1 class="display-3 justify-content-center d-flex">
			{{ model.technicalData.technicalDataHeader }}
		</h1>
		<h3>
			<small>
				{{ model.technicalData.technicalDataDescription }}
			</small>
		</h3>
		<div v-for="(paragraph, q) in model.technicalData.description" :key="q">
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
	name: 'TechnicalData',
	props: {
		model: {
			type: Array,
			required: true
		}
	}
};
</script>
