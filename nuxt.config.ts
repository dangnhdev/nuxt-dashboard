// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-mongoose',
    '@nuxt/test-utils/module'
  ],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/api/**': {
      cors: true
    }
  },

  devServer: {
    port: 1313
  },

  compatibilityDate: '2024-07-11',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {
      directConnection: true
    },
    modelsDir: 'models',
    devtools: true
  }
})
