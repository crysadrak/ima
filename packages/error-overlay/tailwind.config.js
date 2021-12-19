module.exports = {
  content: [
    './overlay/src/**/*.html',
    './overlay/src/**/*.js',
    './overlay/src/**/*.jsx',
    './overlay/src/**/*.ts',
    './overlay/src/**/*.tsx'
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px'
      }
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0) scale(0.99)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.1s ease-out'
      }
    }
  },
  plugins: []
};
