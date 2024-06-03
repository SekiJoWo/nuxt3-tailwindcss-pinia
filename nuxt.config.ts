// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            ApiBase: '/api/',
        },
    },
    modules: ['@pinia/nuxt', '@nuxt/ui', '@pinia-plugin-persistedstate/nuxt','nuxt-icon'],
});
