<template>
	<div class="tab-pane container active col-12 border" id="overview">
		<h1 class="display-3 justify-content-center d-flex">
			{{ model.overview.overviewHeader }}
		</h1>
		<h3>
			<small>
				{{ model.overview.overviewDescription }}
			</small>
		</h3>
		<br />

		<div v-for="(paragraph, j) in model.overview.description" :key="j">
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
	name: 'Overview',
	props: {
		model: {
			type: Array,
			required: true
		}
	}
};
</script>
