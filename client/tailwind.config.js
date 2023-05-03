/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#202029',
        secondary: '#23232c',
        textgray: '#3a3a40',
        nav1: '#27263c',
        nav2: '#38364f',
      },
      backgroundImage: {
        hero: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJ9tqDY7hDLf0P1EPYBl9MC-HgaHrSQWwK2u17kKE6f6TYIeklKJt4ZhHwpeqafejOxU&usqp=CAU')",
      },
    },
  },
  plugins: [],
};
