// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    // Paleta elegante y profesional (clara)
    themes: [
      {
        'bi-corporate': {
          'primary': '#0D1B2A',   // Navy serio (botones principales)
          'primary-content': '#FFFFFF',
          'secondary': '#1B263B', // Azul profundo complementario
          'accent': '#415A77',    // Azul grisáceo para acentos
          'neutral': '#0B1220',   // Texto fuerte / navbar oscuro
          'base-100': '#F7FAFC',  // Fondo base claro
          'base-200': '#EDF2F7',
          'base-300': '#E2E8F0',
          'info': '#3ABFF8',
          'success': '#22C55E',
          'warning': '#F59E0B',
          'error': '#EF4444',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.75rem',
          '--rounded-badge': '0.5rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-focus-scale': '0.98',
          '--border-btn': '1px',
          '--tab-border': '1px',
          '--tab-radius': '0.5rem'
        }
      }
    ]
  }
}
