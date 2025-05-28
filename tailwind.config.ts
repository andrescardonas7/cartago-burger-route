import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta de colores para hamburguesas
        burger: {
          bun: '#D4A574',      // Pan dorado
          meat: '#8B4513',     // Carne
          cheese: '#FFD700',   // Queso cheddar
          lettuce: '#90EE90',  // Lechuga
          tomato: '#FF6347',   // Tomate
          sauce: '#8B0000',    // Salsa BBQ
        },
        // Colores de marca para Cartago
        cartago: {
          primary: '#1E3A8A',    // Azul profundo
          secondary: '#F59E0B',  // Amarillo dorado
          accent: '#10B981',     // Verde esmeralda
          neutral: '#6B7280',    // Gris neutro
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'burger': '0 10px 25px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -2px rgba(139, 69, 19, 0.05)',
        'glow': '0 0 20px rgba(245, 158, 11, 0.5)',
      },
    },
  },
  plugins: [
    // Plugin personalizado para utilidades de burger
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0,0,0,0.2)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config 