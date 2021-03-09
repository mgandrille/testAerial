<template>
	<div class="nav">
		<nav class="navbar navbar-expand-md navbar-light fixed-top">
			<a class="navbar-brand" href="/">Accueil</a>
			<!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
			</button> -->
			<!-- <div class="collapse navbar-collapse justify-content-end" id="navbarCollapse">
				<ul class="navbar-nav mr-5">
					<li class="nav-item" @click="activeClass" v-bind:class="{ active: isActive }">
						<a class="nav-link" href="/#me">Présentation</a>
					</li>
					<li class="nav-item" @click="activeClass" v-bind:class="{ active: isActive }">
						<a class="nav-link" href="/#projects">Projets</a>
					</li>
					<li class="nav-item" @click="activeClass" v-bind:class="{ active: isActive }">
						<a class="nav-link" href="/#contact">Contact</a>
					</li>
				</ul>
			</div> -->
		</nav>
	</div>
</template>

<script>

export default {
	name: 'Navbar',

	data() {
		return {
			isActive: false
		}
	},

	methods: {
		activeClass(e) {
			console.log(e);
			return e.currentTarget.isActive = true;
		}
	}

}
</script>

<style>

</style>