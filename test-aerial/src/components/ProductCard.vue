<template>
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img :src="product.image1" class="card-img-top" height="225" alt="...">
            <div class="card-body">
                <h5 class="card-title text-info text-uppercase">{{ product.title }}</h5>
                <p class="card-text">{{ product.description.substring(0, 85) }}...</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        Prix : <span class="font-weight-bold">{{ product.price }} €</span>
                    </div>
                    <div class="btn-group">
                        <router-link :to="{ path: '../product/' + product.id }" class="btn btn-sm btn-outline-success">En savoir +</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: [
        'product'
    ],

};
</script>

<style lang="scss">



</style>