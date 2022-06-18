<template>
    <div class="site-menu-container">
        <button class="hamburger-menu" :class="{ open }" @click.prevent="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav class="site-menu flex items-center" :class="{ open }">
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
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleMenu() {
            this.open = !this.open
        }
    }
})
</script>

<style lang="scss" scoped>

.site-menu-container {
    display: flex;
    align-items: center;
    .hamburger-menu {
        position: relative;
        display: none;
        padding: 1em;
        margin-right: -0.5em;
        cursor: pointer;
        z-index: 20;

        span {
            position: absolute;
            top: 50%; left: 0;
            display: block;
            width: 24px;
            height: 3px;
            background: $contrast;
            margin: 0 auto;
            transition: all 0.3s ease-in-out;
            border-radius: 3px;

            &:nth-child(1) {
                transform: translateY(7px) rotate(0deg);
            }

            &:nth-child(2) {
                transform: rotate(0deg);
            }

            &:nth-child(3) {
                transform: translateY(-7px) rotate(0deg);
            }
        }

        &.open {
             span {
                &:nth-child(1) {
                    transform: translateY(0px) rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:nth-child(3) {
                    transform: translateY(0) rotate(-45deg);
                }
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
            position: fixed;
            top: 0;
            right: 0;
            background: $black;
            width:90%;
            height: 100vh;
            max-width: 250px;
            color: $pink;
            transform: translate3d(100%, 0, 0);
            transition: all .5s cubic-bezier(.08,1.02,.52,.99);

            &.open {
                transform: translate3d(0, 0, 0);
            }

            ul {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                padding-left: 0.5em;
                letter-spacing: 3px;
                li {
                    margin-bottom: 1em;
                }
            }
        }
    }
}
</style>