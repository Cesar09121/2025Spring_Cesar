<script setup lang="ts">
import { getOne } from '@/models/products';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const product = getOne(productId);
</script>

<template>
    <div>
        <h1 class="title">
            {{ product.title }}
        </h1>
        <div class="product">
            <div class="product-info">
                <p>{{ product.description }}</p>
                <span class="price">${{ product.price }}</span>
                <button class="button is-success">Add to cart</button>
            </div>
            <div class="product-images">
                <img v-for="i in product.images" :src="i" alt="product image" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.product {
    display: flex;
}

.product-images {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    justify-content: space-between;
}
</style>