<template>
	<div class="home">
        <h1 class="mb-3">Découvrez nos produits</h1>
        <div class="row justify-content-center">
            <ProductCard v-for="(product, data) in myJson" :key="data" :product="product">{{data}}</ProductCard>
        </div>
	</div>
</template>

<script>
// @ is an alias to /src
import json from '@/assets/MOCK_DATA.json'
import ProductCard from '@/components/ProductCard.vue'

export default {
	name: 'Home',
	components: {
		ProductCard
	},

    data() {
        return {
            myJson: json,
        }
    }
}

</script>
