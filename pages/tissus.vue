<template>
    <Hero/>
    <h2 class="px-5">Tissus de qualité supérieure...</h2>
    <p class="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatibus nisi eius vel explicabo ullam error recusandae corrupti id mollitia libero ipsam nobis iste dolorum quo, eaque cumque. Soluta, recusandae praesentium reiciendis nesciunt nemo culpa excepturi, unde fugit adipisci eius labore animi quisquam vero consequuntur eos vel ut ipsum assumenda.</p>
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