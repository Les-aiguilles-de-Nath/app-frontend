<template>
  <div class="site-wrapper">
    <SiteHeader/>
    <div class="site-content">
        <slot/>
    </div>
    <SiteFooter/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default defineComponent({
    name: 'SiteLayout',
    components: {
        SiteHeader,
        SiteFooter
    },
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}) as any
</script>

<style lang="scss" scoped>
.site-wrapper {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    max-width: 1200px;

    .site-content {
        width: 100%;
    }
}
</style>