<template>
    <div class="hero-container flex justify-center m-6">
        <img src="https://images.unsplash.com/photo-1532607792384-110a601b26df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="">
        <div class="hero-catch-cta">
            <h1 class="font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
            <div class="btn-cta-container">
                <a class="btn-primary" href="/contact">Commander</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Hero',
})
</script>

<style lang="scss" scoped>
.hero-container {
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    .hero-catch-cta {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        width: 60%;
        height: 100%;

        h1 {
            color: $cream;
            text-align: center;
            letter-spacing: 1px;
            line-height: 1.2;
        }

        .btn-cta-container {
            padding: 1em 0;
            text-align: center;
            margin: 1em 0;

            .btn-primary {
                background: $contrast;
                color: $pink;
                padding: 1em 2em;
                border-radius: 2em;
                text-transform: uppercase;
                letter-spacing: 1px;
                box-shadow: 0 5 8px rgba(darken($contrast, 20), 0.5);
            }
        }
    }
}
</style>