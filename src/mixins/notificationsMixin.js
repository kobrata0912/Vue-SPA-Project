const notificationsMixin = {
	methods: {
		errorToastr(input) {
			this.$toastr.e('Error', input.message);
		},
		successToastr(message) {
			this.$toastr.s(message);
		},
	},
};
export default notificationsMixin;