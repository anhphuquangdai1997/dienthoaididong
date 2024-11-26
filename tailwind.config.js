const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        customscreen:'769px',
        'customscreen-max':{max:'1220px'},
        'xxs': '360px',
      },
      fontSize: {
        '10px': '10px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}