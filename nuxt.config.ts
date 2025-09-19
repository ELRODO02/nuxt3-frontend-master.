// nuxt.config.ts
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'bi-corporate' // Tema DaisyUI por defecto
      },
      title: 'Auth UI'
    }
  },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  components: [
    { path: '~/components/ui', extensions: ['vue'] },
    { path: '~/components/icons', extensions: ['vue'] },
    { path: '~/components/forms', extensions: ['vue'] }
  ],
  devtools: { enabled: true }
})
