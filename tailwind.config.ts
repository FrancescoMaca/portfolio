import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': '#fafaff',
        'white-alpha': '#fafaff8c',
        'details': '#ffffff40',
        'dark-gray': '#1c1c1c',
        'lighter-dark-gray': '#202020',
        'light-gray': '#303030',
        'accent': '#32aef3',
        'accent-alpha': '#32aef38c',
      }
    }
  },
  plugins: [],
}
export default config
