/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' }, // Inicia arriba
          '50%': { opacity: '0.5', transform: 'translateY(-25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },    // Termina en su posición final
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          // '25%': { opacity: '0.25', transform: 'translateY(-75px)' },
          // '50%': { opacity: '.5', transform: 'translateY(-50px)' },
          // '75%': { opacity: '0.75', transform: 'translateY(-25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0)' },   // Empieza pequeña y con opacidad 0
          '100%': { opacity: '1', transform: 'scale(1)' },     // Termina en su tamaño original
        },    
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' }, // Inicia abajo
          '100%': { opacity: '1', transform: 'translateY(0)' },   // Termina en su posición final
        },
        rotateLeft: {
          '0%': { opacity: '0', transform: 'rotate(-300deg) translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotateY(0)' },
        },
        rotateRight: {
          '0%': { opacity: '0', transform: 'rotate(300deg) translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0) rotateY(0)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 1.2s ease-out', // Animación suave de deslizamiento
        'fade-in-up': 'fadeInUp 2s ease-out',  // Animación de desvanecimiento y deslizamiento
        'scale-up': 'scaleUp 1s ease-out',
        'slide-up': 'slideUp 1s ease-out forwards',
        'rotate-left': 'rotateLeft 1s ease-out forwards',
        'rotate-right': 'rotateRight 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
