<template>
     <nav class="site-menu flex items-center">
        <ul class="flex justify-end">
            <li class="mx-4">
                <a href="/">Accueil</a>
            </li>
            <li class="mx-4">
                <a href="/">Flocage</a>
            </li>
            <li class="mx-4">
                <a href="/tissus">Tissus</a>
            </li>
            <li class="mx-4">
                <a href="/créations">Création</a>
            </li>
            <li class="mx-4">
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style lang="scss" scoped>
.site-menu {
    font-family: $font_display;
    font-size: $font_vlarge;
    color: $contrast;
}
</style>