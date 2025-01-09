/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding : {
         DEFAULT : '1rem'
      }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mattone: ['Mattone', 'serif'],
      },
      backgroundColor :{
        primaryColor : '#70D2C2',
        darkBlue : '#000031',       
      }
    },
  },
  plugins: [],
}