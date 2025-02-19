// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt", "@nuxtjs/i18n", "@nuxtjs/color-mode", "@vesp/nuxt-fontawesome"],
});
