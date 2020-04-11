<template>
	<div>
		<div v-for="(model, x) in carlist" :key="x">
			<slideshow :model="model"></slideshow>
			<div class="container-fluid mb-5">
				<div class="container-fluid m-2 p-5 border shadow-lg">
					<!-- Nav tabs -->
					<navtabs></navtabs>

					<!-- Tab panes -->
					<div class="tab-content">
						<overview :model="model"></overview>
						<technicalData :model="model"></technicalData>
						<dimensions :model="model"></dimensions>
						<interior :model="model"></interior>
						<extras :model="model"></extras>
						<pricelist :model="model"></pricelist>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase';
import Slideshow from './Slideshow.vue';
import Navtabs from './tabs/Navtabs.vue';
import Overview from './tabs/Overview.vue';
import TechnicalData from './tabs/TechnicalData.vue';
import Dimensions from './tabs/Dimensions.vue';
import Interior from './tabs/Interior.vue';
import Extras from './tabs/Extras.vue';
import Pricelist from './tabs/Pricelist.vue';

export default {
	name: 'Carlist',
	components: {
		Slideshow,
		Navtabs,
		Overview,
		TechnicalData,
		Dimensions,
		Interior,
		Extras,
		Pricelist
	},
	data() {
		return {
			carModel: '',
			carlist: []
		};
	},
	created() {
		this.carModel = this.$router.currentRoute.params.modelName;
		this.pullCarData();
	},
	watch: {
		'$route.params.modelName': function() {
			this.carModel = this.$router.currentRoute.params.modelName;
			this.pullCarData();
		}
	},
	methods: {
		async pullCarData() {
			const db = firebase.firestore();
			await db
				.collection('cars')
				.where('modelName', '==', this.carModel)
				.get()
				.then(snap => {
					snap.forEach(async doc => {
						this.carlist = [await doc.data()];
					});
				});
		}
	}
};
</script>

<style></style>
