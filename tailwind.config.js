/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        'primary': {
          50:  '#f4f6f5',
          100: '#e3e9e6',
          200: '#c7d3cd',
          300: '#a1b5ac',
          400: '#7a9487',
          500: '#5d7a6d',
          600: '#4a6257',
          700: '#3d5048',
          800: '#34433c',
          900: '#2d3933',
        },
        'sand': {
          50:  '#fafaf8',
          100: '#f5f4f0',
          200: '#ebe9e1',
        },
      }
    }
  },
  plugins: [],
}
