<template>
    <div class="detail">
        <h2>{{product.title}}</h2>
        <div class="container">
            <div id="slider" class="carousel slide my-4" data-ride="carousel">
                <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="3000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="1024"
                    img-height="400"
                    style="text-shadow: 1px 1px 2px #333;"
                >
                <b-carousel-slide :img-src="product.image1"></b-carousel-slide>
                <b-carousel-slide :img-src="product.image2"></b-carousel-slide>
                <b-carousel-slide :img-src="product.image3"></b-carousel-slide>
                </b-carousel>
            </div>
            <p>{{product.description}}</p>
            <div class="panier row justify-content-between">
                <p>Prix : <span class="font-weight-bold">{{product.price}} €</span></p>
                <button @click="$store.commit('addProductToCart', product)" class="btn btn-outline-success">Ajouter au panier</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    .carousel-item img {
        height:400px!important ;
    }
</style>


<script>
import json from '@/assets/MOCK_DATA.json'

export default {
    name: "Detail",

    data() {
        return {
            myJson: json,
            slide: 0,
            sliding: null
        }
    },

    methods: {
        onSliderStart() {
            this.slide = true
        },
        onSlideEnd() {
            this.sliding = false
        }
    },

    computed: {
        product() {
            // console.log(this.$attrs.id);
            return this.myJson.find(element => element.id === parseInt(this.$attrs.id))
        }
    }

};
</script>


