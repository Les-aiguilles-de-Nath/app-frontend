<template>
    <footer class="w-full px-5 py-7">
        <div class="text-center">
            <p>Copyright © - Les aiguilles de Nath {{ year }}</p>
            <p>Made with <i class="fas fa-heart"></i> by <a href="https://grimille.fr" target="_blank">Mickaël Dhainaut</a></p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    computed: {
        year() {
            return new Date().getFullYear();
        }
    }
})
</script>


<style lang="scss" scoped>
footer {
    background: $black;
    color: $white;

    i {
        color: $pink;
    }

    a {
        color: $pink;
    }
}
</style>