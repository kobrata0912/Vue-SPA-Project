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
						<p class="mx-auto mt-4 p-2 h3">
							{{ oneNews.date.seconds | formatDate }}
						</p>
						<br />
						<p class="mx-auto h1">
							{{ oneNews.title }}
						</p>

						<p
							v-for="(paragraph, j) in oneNews.description"
							:key="j"
							class="justify"
						>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{{ paragraph }}
						</p>

						<div
							:id="'news_number' + oneNews.id"
							class="carousel slide mb-3 mx-auto d-block"
							data-ride="carousel"
						>
							<!-- The slideshow -->
							<div class="carousel-inner">
								<div
									v-for="(picture, k) in oneNews.pictures"
									:key="k"
									:class="k === 0 ? 'carousel-item active' : 'carousel-item'"
								>
									<img
										class="d-block mx-auto img-fluid"
										:src="picture"
										alt="Audi"
									/>
								</div>
							</div>

							<!-- Left and right controls -->
							<a
								class="carousel-control-prev"
								:href="`#news_number${oneNews.id}`"
								data-slide="prev"
								
							>
								<span class="carousel-control-prev-icon"></span>
							</a>
							<a
								class="carousel-control-next"
								:href="`#news_number${oneNews.id}`"
								data-slide="next"
							>
								<span class="carousel-control-next-icon"></span>
							</a>
						</div>
					</div>
				</template>
			</div>
			<div class="col-1"></div>
		</div>
	</div>
</template>

<script>
import newsMixin from '../mixins/newsMixin';

export default {
	data() {
		return {
			news: [],
			loading: true,
		};
	},
	mixins: [newsMixin],
	watch: {
		news: function() {
			this.loading = false;
		},
}
};
</script>

<style></style>
