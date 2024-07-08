// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          customPurple: '#8064A2',
          customBlue: '#0096C8',
          customBg: '#F7F5F9',
          graydark: '#939CA3',
          lightgray: '#CED4DA',
          lightblue: '#DBEAFE',
          parrot: '#77933C',
          darkblue: '#0096C8',
          darkred: '#C0504D'
          
        },
      },
    },
    plugins: [],
  };
  