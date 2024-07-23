const flowbite = require('flowbite-react/tailwind');
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['AmpleSoftPro-Regular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    plugin(function ({ addBase }) {
      addBase({ html: { fontSize: '18px' } });
    }),
  ],
};
