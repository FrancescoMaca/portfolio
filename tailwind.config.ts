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
        'hover-dark': '#48484855',
        'accent': '#5576CC',
        'border-panel': '#2B2B2B',
        'border-input': '#474747',
        'input': '#2A2A2A',
        'control-active': '#737373',
        'control-disable': '#4D4D4D',
        'text-normal': '#C6C6C6',
        'text-unfocused': '#6A6A6A',
        'selection-color': '#4160A3'
      },
      fontSize: {
        'l': '4rem',
        'm': '3rem',
        's': '2rem',
        'xs': '1.5rem',
      },
      borderRadius: {
        '4xl': '3rem',
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
