// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt", "@nuxtjs/i18n", "@nuxtjs/color-mode", "@vesp/nuxt-fontawesome"],
    ssr: false,
    app: {
        head: {
            title: "FUSIE",
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            link: [{ rel: "icon", type: "image/icon", href: "/logo-favicon.ico" }],
        },
    },
    routeRules: {
        "/": {
            redirect: "/home",
        },
    },
    fontawesome: {
        icons: {
            solid: ["moon", "sun", "globe"],
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/css/main.css"],
    srcDir: "src/",
    elementPlus: {
        importStyle: "scss",
        themes: ["dark"],
    },
    colorMode: {
        classSuffix: "",
    },
    i18n: {
        locales: [
            { code: "pt", language: "pt-BR" },
            { code: "en", language: "en-US" },
            { code: "es", language: "es-ES" },
        ],
        defaultLocale: "en",
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                    additionalData: '@use "~/assets/scss/element-custom.scss" as element;',
                },
            },
        },
    },
});
