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
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/user/login">Вход</router-link>
			</li>
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/user/register"
					>Регистрация</router-link
				>
			</li>
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/user/profile">Профил</router-link>
			</li>
			<li class="nav-item mx-1 shadow">
				<router-link class="nav-link h4" to="/home">Изход</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style></style>
