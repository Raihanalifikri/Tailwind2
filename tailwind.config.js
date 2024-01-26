/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins'],
        'Shadows Into Light' : ['Shadows Into Light'],
        'Comic Neue' : ['Comic Neue']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

