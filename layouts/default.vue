<template>
  <div>
    <SiteHeader/>
    <slot/>
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