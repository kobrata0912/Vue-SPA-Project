<template>
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
</template>

<script>
export default {
    name: 'Slideshow',
    props: {
        model: {
            type: Array,
            required: true
        }
    }
};
</script>
