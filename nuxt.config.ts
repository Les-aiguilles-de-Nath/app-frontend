import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css", "~/assets/sass/app.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/sass/app.scss"',
                },
            },
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