<template>
	<div class="container-fluid">
		<div class="row m-5 border">
			<div class="col-1"></div>
			<div class="col-10">
				<div class="container" style="padding-top: 50%;" v-if="loading">
					<div class="row">
						<div id="loader">
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="dot"></div>
							<div class="loading"></div>
						</div>
					</div>
				</div>
				<template v-if="news">
					<div v-for="(oneNews, i) in news" :key="i" class="row border-bottom">
						<onenews :oneNews="oneNews"></onenews>

					</div>
				</template>
			</div>
			<div class="col-1"></div>
		</div>
	</div>
</template>

<script>
import newsMixin from '../../mixins/newsMixin';
import Onenews from './Onenews.vue'

export default {
	data() {
		return {
			news: [],
			loading: true,
		};
	},
	components: {Onenews},
	mixins: [newsMixin],
	watch: {
		news: function() {
			this.loading = false;
		},
}
};
</script>

<style></style>
