<template>
	<nav
		class="navbar navbar-expand-sm bg-light navbar-light sticky-top justify-content-center border"
	>
		<ul class="navbar-nav">
			<li class="nav-item border mx-1 shadow">
				<router-link to="/home" class="nav-link h4">Начало</router-link>
			</li>
			<li class="nav-item dropdown mx-1 shadow">
				<a
					class="nav-link dropdown-toggle h4"
					id="navbardrop"
					data-toggle="dropdown"
				>
					Модели
				</a>
				<div class="dropdown-menu">
					<router-link class="dropdown-item" to="/models/q2">Q2</router-link>
					<router-link class="dropdown-item" to="/models/q3">Q3</router-link>
				</div>
			</li>
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/configurator"
					>Конфигуратор</router-link
				>
			</li>
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/repairs"
					>Заявка за сервиз</router-link
				>
			</li>
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/news">Новини</router-link>
			</li>
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/aboutus">За нас</router-link>
			</li>
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/contacts">Контакти</router-link>
			</li>
			<li v-if="!user.loggedIn" class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/user/login">Вход</router-link>
			</li>
			<li v-if="!user.loggedIn" class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/user/register"
					>Регистрация</router-link
				>
			</li>
			<li v-if="user.loggedIn" class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/user/profile">Профил</router-link>
			</li>
			<li v-if="user.loggedIn" class="nav-item mx-1 shadow">
				<a @click.prevent="signOut" class="nav-link h4">Изход</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex';
import authMixin from '../../mixins/authMixin';
import notificationsMixin from '../../mixins/notificationsMixin';

export default {
	name: 'Navigation',
	computed: {
		...mapGetters({
			user: 'user',
		}),
	},
	mixins: [authMixin, notificationsMixin],
	methods: {
		async signOut() {
			this.loading = true;
			await this.firebaseLogOut()
				.then(() => {
					this.loading = false;
					this.successToastr('Успешно излизане');
					if (this.$router.currentRoute.name !== 'Home') {
						this.$router.replace({
							path: '/home',
						});
					}
				})
				.catch((error) => {
					this.loading = false;
					this.errorToastr(error);
				});
		},
	},
};
</script>