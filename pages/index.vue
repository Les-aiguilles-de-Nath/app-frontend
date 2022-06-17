<template>
    <Hero/>
    <h2 class="px-5">De fil en aiguille ...</h2>
    <div class="product-card-grid grid grid-cols-3 gap-1 p-5">
        <div class="product-card" v-for="index in 6" :key="'product-card-' + index">
            <div class="product-card-image">
                <img src="https://via.placeholder.com/250x250" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '../components/Hero.vue';

export default defineComponent({
    components: {
        Hero
    }
})
</script>