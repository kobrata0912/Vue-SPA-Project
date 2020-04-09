<template>

  <div>WORKING ON IT</div>
</template>

<script>
import carlistMixin from '../mixins/carlistMixin';

export default {
  name: 'Carlist',
  mixins: [carlistMixin],
  data() {
    return {
      carModel: '',
      carlist: [],
    }
  },
	mounted() {
    this.carModel = this.$router.currentRoute.params.modelName;
  },
  watch: {
    '$route.params.modelName': function() {
      this.carModel = this.$router.currentRoute.params.modelName;
    },
  },
};
</script>

<style></style>
