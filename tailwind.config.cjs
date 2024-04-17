/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],

  plugins: [require('@tailwindcss/typography')],

  theme: {
    extend: {
      container: { center: true },
      fontFamily: {
        tty: ['"Perfect DOS VGA 437"']
      }
    }
  }
};

module.exports = config;
