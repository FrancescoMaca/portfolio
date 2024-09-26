import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#181818',
        'editor': '#1E1E1E',
        'hover-dark': '#353535',
        'accent': '#5576CC',
        'border-panel': '#2B2B2B',
        'border-input': '#474747',
        'input': '#2A2A2A',
        'control-active': '#737373',
        'control-disable': '#4D4D4D',
        'text-normal': '#cccccc',
        'text-unfocused': '#6A6A6A',
        'text-changed': '#D3C194',
        'selection-color': '#4160A3',
        'line-number': '#717680'
      },
      fontSize: {
        'l': '4rem',
        'm': '3rem',
        's': '2rem',
        'xs': '1.5rem',
      },
      borderRadius: {
        '4xl': '3rem',
      },
      animation: {
        'fly-duck': 'fly-duck 2s linear forwards',
        'gradient-text': 'rainbow 1s linear infinite',
      },
      keyframes: {
        'fly-duck': {
          '0%': {
            bottom: '0',
            right: '-50%',
          },
          '100%': {
            bottom: '100%',
            right: '150%',
          }
        },
        rainbow: {
          '0%, 100%': {
            'background-position-x': '0%'
          },
          '50%': {
            'background-position-x': '100%'
          }
        }
      },
      backgroundImage: {
        'highlight-gradient': 'linear-gradient(to right, #B868E7, #7AD3E9)',
      }
    },
    fontFamily: {
      'text': 'Melno',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

export default config
