<template>
	<div class="basket">
		<h2>Votre panier</h2>

		<table class="table">
			<thead>
				<tr>
					<td>Produit(s)</td>
					<td>Quantité</td>
					<td>Prix unitaire</td>
					<td>Prix total</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(product, index) in getCart" :key="index">
					<td>{{ product.title }}</td>
					<td>{{ product.qty }}</td>
					<td>{{ product.price }}</td>
					<td>{{ product.price * product.qty }}</td>
				</tr>
			</tbody>
		</table>

		<div>
			Le montant total de votre panier est de : {{ totalPrice }} € (hors TVA)
		</div>

		<div class="btn-group">
			<button class="btn btn-sm btn-outline-primary">Payer</button>
		</div>


	</div>
</template>

<script>
export default {
	computed: {
		getCart() {
			return this.$store.state.cart;
		},
		totalProduct() {
			return this.$store.state.cart.reduce((acc, current) => acc + current.qty, 0);
		},
		totalPrice() {
			return this.$store.state.cart.reduce((acc, current) => acc + current.price * current.qty, 0);
		}
	}
}
</script>
