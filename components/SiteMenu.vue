<template>
    <div class="site-menu-container">
        <button class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav class="site-menu flex items-center">
            <ul class="flex justify-end">
                <li class="mx-4">
                    <a href="/">Accueil</a>
                </li>
                <li class="mx-4">
                    <a href="/flocages">Flocage</a>
                </li>
                <li class="mx-4">
                    <a href="/tissus">Tissus</a>
                </li>
                <li class="mx-4">
                    <a href="/creations">Création</a>
                </li>
                <li class="mx-4">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>

.site-menu-container {
    display: flex;
    align-items: center;
    .hamburger-menu {
        display: none;
        padding: 1em;
        margin-right: -0.5em;
        cursor: pointer;

        span {
            display: block;
            width: 24px;
            height: 3px;
            background: $contrast;
            margin: 0 auto;
            transition: all 0.3s ease-in-out;
            border-radius: 3px;

            &:nth-child(1) {
                transform: translateY(10px) rotate(0deg);
            }

            &:nth-child(2) {
                transform: rotate(0deg);
            }

            &:nth-child(3) {
                transform: translateY(-10px) rotate(0deg);
            }
        }
    }
    .site-menu {
        font-family: $font_display;
        font-size: $font_vlarge;
        color: $contrast;
    }
}

@media screen and (max-width: 768px) {
    .site-menu-container {
        .hamburger-menu {
            display: block;
        }
        .site-menu {
            display: none;
    }
    }
}
</style>