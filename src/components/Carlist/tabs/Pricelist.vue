<template>
	<div class="tab-pane container fade col-12 border" id="priceList">
		<h1 class="display-3 justify-content-center d-flex">
			{{ model.pricelist.priceListHeader }}
		</h1>
		<h3>
			<small>
				{{ model.pricelist.priceListDescription }}
			</small>
		</h3>
		<h3>
			Свалете ценовата листа
			<a :href="model.pricelist.priceListUrl">тук</a>
		</h3>
	</div>
</template>

<script>
export default {
	name: 'Pricelist',
	props: {
		model: {
			type: Array,
			required: true
		}
	}
};
</script>
