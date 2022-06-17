<template>
    <section class="contact-container flex justify-between items-center px-5 my-5">
        <div class="contact-informations-container pr-5">
            <h2>Contact</h2>
            <div class="flex flex-col">
                <a href="mailto:blabla@blabla.bla">blabla@blabla.bla</a>
                <a href="tel:+3366666666">06 66 66 66 66</a>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41999.89765314756!2d2.3219701258411205!3d48.85833236812569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67268c556cf43%3A0x7764bb8b0d6aa290!2sLes%20Boulangers%20de%20Reuilly!5e0!3m2!1sfr!2sfr!4v1641739117873!5m2!1sfr!2sfr" width="500" height="450" style="border:0;" loading="lazy"></iframe>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
    }
})
</script>

<style lang="scss" scoped>
form {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}
</style>