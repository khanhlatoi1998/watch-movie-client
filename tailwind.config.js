/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: '#ffffff54',
        color_main: '#080A1A',
        color_01: '#F20000',
        color_02: '#0B0F29',
        color_06: '#333',
        color_07: '#eee',
        color_08: '#252525',
        color_09: '#acacac',
        color_10: '#212121',
        color_11: '#ffffff21',
        color_12: '#acacac',
        sale: '#acacac',
        text: '#666666',
        opacity_01: '#ffffff94'
      },
      fontSize: {
        'title-lg': '21px',
        'title': '18px',
        'sm': '15px',
        'md': '16px',
        'lg': '17px',
        'xl': '18px',
        '2xl': '21px',
        'full': '30px'
      },
      maxWidth: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderColor: {
        border: '#ffffff54'
      }
    },
  },
  plugins: [],
}

