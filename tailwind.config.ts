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
        'dark': '#222222',
        'gray': '#3F3F3F',
        'light-gray': '#C7C7C7',
        'dark-white': '#D9D9D9',
        'white': '#FAFAFF',
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
      'text': 'Josefin Sans',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

export default config
