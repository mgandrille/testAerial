<template>
    <!-- <router-link :to="{ path: '../plante/detail/' + plant.id }" tag="div"> -->

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
                        <!-- <button type="button" class="btn btn-sm btn-outline-success"> -->
                            <router-link :to="{ path: '../product/detail/' + product.id }" class="btn btn-sm btn-outline-success">En savoir +</router-link>
                            <!-- <a href="">En savoir +</a></button> -->
                    </div>
                    <!-- <small class="text-muted"><?= date("H:m")?></small> -->
                </div>
            </div>
        </div>
    </div>
		<!-- <footer class="my-2 text-right">
                <button class="btn btn-secondary ml-auto d-none" @click.prevent="deletePlant()" v-bind:class="{ 'd-inline-block': inDashboard }">Supprimer</button>
                <button class="btn btn-primary ml-auto" @click.prevent="addPlant()" v-bind:class="{ disabled: disable, 'd-none': inDashboard }" :disabled="disable">Ajouter +</button>
        </footer> -->
    <!-- </div> -->

    <!-- </router-link> -->

</template>

<script>
export default {
    name: "ProductCard",
    props: [
        'product'
    ],

    // data() {
    //     return {
    //         // disable: false,
    //         // inDashboard: false,
    //         classes: [],
    //         // isAlert: false
    //     };
    // },

    // created() {
    //     // this.isDisabled();
    // },

    // methods: {
    //     // addPlant() {
    //     //     if (this.userLogged != undefined || this.userPlantes != undefined) {
    //     //         this.$http
    //     //             .get(
    //     //                 "dashboard/add/" +
    //     //                     this.userLogged.dashboard.id +
    //     //                     "/" +
    //     //                     this.plant.id
    //     //             )
    //     //             .then(() => {
    //     //                 return [(this.isAlert = true), (this.disable = true)];
    //     //             });
    //     //     }
    //     // },
    //     // deletePlant() {
    //     //     this.$http.get('dashboard/remove/' + this.userLogged.dashboard.id + '/' + this.plant.id)
    //     //     .then(() => {
    //     //         console.log('plante supprimée');
    //     //         window.location.reload();
    //     //     })
    //     // },
    //     hoverOver(){
    //         this.classes.push('animated')
    //     },
    //     hoverOut(){
    //         this.classes = []
    //     },
    // },

    // computed: {
    //     // isDisabled: function() {
    //     //     if (this.userLogged != undefined || this.userPlantes != undefined) {
    //     //         this.userPlantes.forEach(plante => {
    //     //             if (this.plant.id === plante.id) {
    //     //                 this.inDashboard = true;
    //     //                 return (this.disable = true);
    //     //             }
    //     //         });
    //     //     }
    //     // }
    // }
};
</script>

<style lang="scss">



</style>