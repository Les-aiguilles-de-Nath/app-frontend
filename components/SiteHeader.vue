<template>
    <header class="flex justify-between px-4 py-2">
        <a class="flex justify-start items-center" href="/">
            <img class="w-20 mr-2" src="/images/logos/logo.png" alt="Les aiguilles de Nath">
            <p class="logo-watermark flex flex-col justify-center">
                <span>Les aiguilles</span>
                <span>de Nath</span>
            </p>
        </a>
        <SiteMenu />
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteMenu  from './SiteMenu.vue'

export default defineComponent({
    name: 'SiteHeader',
    components: {
        SiteMenu
    }
})
</script>

<style lang="scss" scoped>
.logo-watermark {
    font-family: $font_display;
    font-size: $font_large;
    line-height: 1;
    color: $contrast;

    span {
        &:nth-child(2) {
            position: relative;
            left: 16px;
            font-size: $font_vlarge;
        }
    }
}
</style>
