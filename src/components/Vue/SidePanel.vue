<template>
    <!-- TODO: Add styles to this view -->
    <!-- TODO: Add Atomic components to this view -->
    <aside v-if="isVisible">
        <div class="overlay" @click="closePanel"></div>
        <div class="side-panel">
            <h2>Side Panel</h2>
            <ul v-if="Object.values(productsItems).length">
                <li v-for="cartItem in Object.values(productsItems)" v-bind:key="cartItem.name">
                    <img :src=cartItem.imageSrc :alt=cartItem.name />
                    <h3>{{ cartItem.name }}</h3>
                    <p>Quantity: {{ cartItem.quantity }}</p>
                </li>
            </ul>
            <p v-else>Your cart is empty!</p>
        </div>
    </aside>
</template>

<script setup>
import { cartItems, isCartOpen } from "@/store/cartStore";
import { useStore } from '@nanostores/vue';

const isVisible = useStore(isCartOpen);
const productsItems = useStore(cartItems);


const closePanel = () => {
    isCartOpen.set(false);
};
</script>

<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
}

.side-panel {
    width: 300px;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 100;
}
</style>
