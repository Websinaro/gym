/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        heading: ['Barlow Condensed', 'Arial Narrow', 'sans-serif'],
        body: ['Barlow', 'Arial', 'sans-serif'],
      },
      colors: {
        forge: '#0A0A0A',
        'forge-800': '#141414',
        'forge-700': '#1E1E1E',
        'forge-600': '#2A2A2A',
        lime: '#C6F135',
        'lime-dark': '#9DC117',
        steel: '#6B7280',
        'steel-light': '#9CA3AF',
        red: '#FF2D2D',
      },
      animation: {
        'count-up': 'countUp 2s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'pulse-lime': 'pulseLime 2s ease-in-out infinite',
      },
      keyframes: {
        countUp: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideIn: { '0%': { transform: 'translateX(-30px)', opacity: 0 }, '100%': { transform: 'translateX(0)', opacity: 1 } },
        pulseLime: { '0%,100%': { boxShadow: '0 0 20px rgba(198,241,53,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(198,241,53,0.7)' } },
      },
    },
  },
  plugins: [],
}
