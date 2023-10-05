/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        linkedin: '#0A66C2',
      },
      animation: {
        'expand': 'expand 3s ease-out 0.5s', // Personaliza la animación expand
      },
      keyframes: {
        expand: 'expand 3s ease-out',
        delay: {
          '0': '0s',
          '1': '1s',
          '2': '2s',
          '3': '3s',
          '4': '4s',
          '5': '5s',
        },
      },
      animation: {
        'expand-delayed-0': 'expand 3s ease-out 0.1s',
        'expand-delayed-1': 'expand 3s ease-out 0.2s',
        'expand-delayed-2': 'expand 3s ease-out 0.3s',
        'expand-delayed-3': 'expand 3s ease-out 0.4s',
        'expand-delayed-4': 'expand 3s ease-out 0.5s',
        'expand-delayed-5': 'expand 3s ease-out 0.6s',
      },
    },
  },
  plugins: [],
}
