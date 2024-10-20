/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      clipPath: {
        'custom-md': 'polygon(45% 0%, 100% 0%, 100% 100%, 30% 100%)',
      },
    },
  },
  variants: {
    clipPath: ['responsive'], // Enable responsive variants
  },
  plugins: [],
}
