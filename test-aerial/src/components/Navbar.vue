<template>
	<div class="nav mb-5">
		<nav class="navbar navbar-expand-md navbar-light fixed-top">
			<div class="container justify-content-between">
				<a class="navbar-brand" href="/">Accueil</a>
				<router-link :to="{ path: '../basket' }" class="nav-item text-right">Panier (<span v-text="this.$store.state.cart.length"></span>) </router-link>
			</div>
		</nav>
	</div>
</template>

<script>

export default {
	name: 'Navbar',


}
</script>

<style lang="scss">
	nav {
		position: fixed;
		background: white;
	}
</style>