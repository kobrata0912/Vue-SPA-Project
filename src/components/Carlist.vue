<template>
	<div>
		<div v-for="(model, x) in carlist" :key="x">
			<div id="carModel" class="carousel slide" data-ride="carousel">
				<!-- The slideshow -->
				<div class="carousel-inner">
					<div
						v-for="(picture, k) in model.pictures"
						:key="k"
						:class="k === 0 ? 'carousel-item active' : 'carousel-item'"
					>
						<img
							class="d-block mx-auto"
							:src="picture"
							width="2000px"
							height="563px"
							:alt="model.modelName"
						/>
					</div>
				</div>
				<!-- Left and right controls -->
				<a class="carousel-control-prev" href="#carModel" data-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				</a>
				<a class="carousel-control-next" href="#carModel" data-slide="next">
					<span class="carousel-control-next-icon"></span>
				</a>
			</div>
			<div class="container-fluid mb-5">
				<div class="container-fluid m-2 p-5 border shadow-lg">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs p-1">
						<li class="nav-item">
							<a class="nav-link active" data-toggle="tab" href="#overview"
								>Преглед</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#technicalData"
								>Технически данни</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#dimensions"
								>Размери</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#interior"
								>Интериор</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#extras"
								>Оборудване</a
							>
						</li>
						<li class="nav-item">
							<a class="nav-link" data-toggle="tab" href="#priceList"
								>Ценова Листа</a
							>
						</li>
					</ul>

					<!-- Tab panes -->
					<div class="tab-content">
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

							<div
								v-for="(paragraph, j) in model.overview.description"
								:key="j"
							>
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
						<div
							class="tab-pane container fade col-12 border"
							id="technicalData"
						>
							<h1 class="display-3 justify-content-center d-flex">
								{{ model.technicalData.technicalDataHeader }}
							</h1>
							<h3>
								<small>
									{{ model.technicalData.technicalDataDescription }}
								</small>
							</h3>
							<div
								v-for="(paragraph, q) in model.technicalData.description"
								:key="q"
							>
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
						<div class="tab-pane container fade col-12 border" id="dimensions">
							<h1 class="display-3 justify-content-center d-flex">
								Размери
							</h1>
							<h3 class="display-4 justify-content-center d-flex">
								<small>
									Изглед отстрани
								</small>
							</h3>
							<img
								class="rounded mx-auto d-block p-2"
								:src="model.dimensions.sideView"
							/>
							<h3 class="display-4 justify-content-center d-flex">
								<small>
									Изглед отгоре
								</small>
							</h3>
							<img
								class="rounded mx-auto d-block p-2"
								:src="model.dimensions.topView"
							/>
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
						<div class="tab-pane container fade col-12 border" id="interior">
							<h1 class="display-3 justify-content-center d-flex">
								{{ model.interior.interiorHeader }}
							</h1>
							<h3>
								<small>
									{{ model.interior.interiorDescription }}
								</small>
							</h3>
							<div
								v-for="(paragraph, w) in model.interior.description"
								:key="w"
							>
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
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase';

export default {
	name: 'Carlist',

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
						console.log(this.carlist);
					});
				});
		}
	}
};
</script>

<style></style>
