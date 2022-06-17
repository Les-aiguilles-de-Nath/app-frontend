import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css", "~/assets/scss/app.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: 
                        '@import "@/assets/scss/_variables.scss";',
                },
            },
        },
    },
    app: {
        head: {
            title: "Les aiguilles de Nath",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Charis+SIL:ital,wght@0,400;0,700;1,400&family=Updock&display=swap"
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossOriginIsolated: false,
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                }
            ]
        },
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
});