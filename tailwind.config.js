module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep romantic pink
        primary: {
          DEFAULT: '#D63384', // pink-600
          50: '#FCE4EC', // pink-50
          100: '#F8BBD0', // pink-100
          200: '#F48FB1', // pink-200
          300: '#F06292', // pink-300
          400: '#EC407A', // pink-400
          500: '#E91E63', // pink-500
          600: '#D63384', // pink-600
          700: '#C2185B', // pink-700
          800: '#AD1457', // pink-800
          900: '#880E4F', // pink-900
        },
        // Secondary Colors - Rich Valentine red
        secondary: {
          DEFAULT: '#DC3545', // red-600
          50: '#FFEBEE', // red-50
          100: '#FFCDD2', // red-100
          200: '#EF9A9A', // red-200
          300: '#E57373', // red-300
          400: '#EF5350', // red-400
          500: '#F44336', // red-500
          600: '#DC3545', // red-600
          700: '#D32F2F', // red-700
          800: '#C62828', // red-800
          900: '#B71C1C', // red-900
        },
        // Accent Colors - Warm coral
        accent: {
          DEFAULT: '#FD7E14', // orange-500
          50: '#FFF3E0', // orange-50
          100: '#FFE0B2', // orange-100
          200: '#FFCC80', // orange-200
          300: '#FFB74D', // orange-300
          400: '#FFA726', // orange-400
          500: '#FD7E14', // orange-500
          600: '#FB8C00', // orange-600
          700: '#F57C00', // orange-700
          800: '#EF6C00', // orange-800
          900: '#E65100', // orange-900
        },
        // Background Colors
        background: '#FFF8F9', // pink-50 custom
        surface: {
          DEFAULT: '#F8F9FA', // gray-50
          hover: '#F1F3F5', // gray-100
        },
        // Text Colors
        text: {
          primary: '#212529', // gray-900
          secondary: '#6C757D', // gray-600
          tertiary: '#ADB5BD', // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: '#198754', // green-600
          light: '#D1E7DD', // green-100
        },
        warning: {
          DEFAULT: '#FFC107', // amber-500
          light: '#FFF3CD', // amber-100
        },
        error: {
          DEFAULT: '#DC3545', // red-600
          light: '#F8D7DA', // red-100
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        heart: '0 4px 12px rgba(214, 51, 132, 0.15)',
        card: '0 2px 8px rgba(214, 51, 132, 0.08)',
        elevated: '0 8px 24px rgba(214, 51, 132, 0.12)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
      },
      transitionDuration: {
        'fast': '300ms',
        'base': '400ms',
        'slow': '600ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-heart': 'pulse 2s ease-in-out infinite',
        'reveal': 'reveal 400ms ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        reveal: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}