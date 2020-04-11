<template>
	<div class="tab-pane container fade col-12 border" id="interior">
		<h1 class="display-3 justify-content-center d-flex">
			{{ model.interior.interiorHeader }}
		</h1>
		<h3>
			<small>
				{{ model.interior.interiorDescription }}
			</small>
		</h3>
		<div v-for="(paragraph, w) in model.interior.description" :key="w">
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
	name: 'Interior',
	props: {
		model: {
			type: Array,
			required: true
		}
	}
};
</script>
