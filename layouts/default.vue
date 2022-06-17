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
    }
}) as any
</script>

<style lang="scss" scoped>
.site-wrapper {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .site-content {
        width: 100%;
        max-width: 1200px;
        min-height: 80vh;
    }
}
</style>