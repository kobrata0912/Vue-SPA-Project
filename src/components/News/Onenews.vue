<template>
	<div>
		<p class="mx-auto mt-4 p-2 h3">
			{{ oneNews.date.seconds | formatDate }}
		</p>
		<br />
		<p class="mx-auto h1">
			{{ oneNews.title }}
		</p>

		<p v-for="(paragraph, j) in oneNews.description" :key="j" class="justify">
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
					<img class="d-block mx-auto img-fluid" :src="picture" alt="Audi" />
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

<script>
export default {
	name: 'Onenews',
	props: {
		oneNews: {
			type: Object,
			required: true
		}
	}
};
</script>
