/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          soft: '#121212',
          raised: '#181818',
          border: '#262626',
        },
        ember: {
          DEFAULT: '#e10600',
          light: '#ff2b1f',
          dark: '#a30500',
          glow: 'rgba(225, 6, 0, 0.35)',
        },
        bone: {
          DEFAULT: '#f5f3ef',
          muted: '#a8a6a1',
          dim: '#726f6a',
        },
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 20px 40px -12px rgba(225, 6, 0, 0.25), 0 10px 25px -10px rgba(0,0,0,0.6)',
        glow: '0 0 60px -10px rgba(225, 6, 0, 0.45)',
      },
      backgroundImage: {
        'ember-gradient': 'linear-gradient(135deg, #e10600 0%, #8a0400 100%)',
        'ink-fade': 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.9) 85%, #0a0a0a 100%)',
      },
    },
  },
  plugins: [],
}
