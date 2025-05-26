import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['@nuxt/content'],
  compatibilityDate: '2024-07-06',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg', href: '/fusie-favicon.png' },
      ]
    },
  },
  mdc: {
    highlight: {
      langs: ['xml', 'dart'],
    },
  },
  i18n: { 
    defaultLocale: 'en', 
    locales: [ 
      { 
        code: 'en', 
        name: 'English', 
        language: 'en-US', 
      }, 
      {
        code: 'pt',
        name: 'Português',
        language: 'pt-BR',
      },
      {
        code: 'es',
        name: 'Español',
        language: 'es-ES',
      }
    ], 
  },
  vite: {
       css: {
          preprocessorOptions: {
              scss: {
                  silenceDeprecations: ["legacy-js-api"],
              },
          },
      },
       build: {
          rollupOptions: {
            onwarn(warning, warn) {
                if (warning.code === 'SOURCE_MAP_WARNING') {
                    return;
                }
                warn(warning);
            }
          }
        },
    plugins: [
      tailwindcss(),
    ],
  },
});