<template>
    <section class="contact-container px-5 my-5">
        <div class="contact-informations-container pr-5">
            <h2>Contact</h2>
            <div class="flex flex-col">
                <address>
                    <p>
                        Madame Nathalie XXX
                    </p>
                    <p>
                        4 rue du moulin
                    </p>
                    <p>
                        59000 Lille, France
                    </p>
                    <p>
                        <a href="mailto:blabla@blabla.bla">blabla@blabla.bla</a>
                    </p>
                    <p>
                        <a href="tel:+3366666666">06 66 66 66 66</a>
                    </p>
                </address>
            </div>
        </div>
        <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41999.89765314756!2d2.3219701258411205!3d48.85833236812569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67268c556cf43%3A0x7764bb8b0d6aa290!2sLes%20Boulangers%20de%20Reuilly!5e0!3m2!1sfr!2sfr!4v1641739117873!5m2!1sfr!2sfr" width="600" height="380" style="border:0;" loading="lazy"></iframe>
        </div>
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
.contact-container {
    display: flex;
    justify-content: center;
    .contact-informations-container {
        position: relative;
        margin-right: 4rem;
        width: 50%;
        text-align: right;

        &::after {
            content: '';
            position: absolute;
            top: 0; right: 0;
            width: 3px;
            height: 100%;
            background: $contrast;
        }
    }


    .google-map {
        position: relative;
        flex: 1 1 0;

        &::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border: 1px solid $contrast;
            transform: scale3d(1.05, 1.05, 1);
            z-index: -1;
        }

        iframe {
            width: 100%;
            box-shadow: 5px 5px 5px rgba($grey, 0.5);
        }
    }
}

@media screen and (max-width: 768px) {
    .contact-container {
        display: flex;
        flex-direction: column;
        .contact-informations-container {
            width: 100%;
            max-width: 100%;
            margin-bottom: 2rem;
        }
    }
}

</style>