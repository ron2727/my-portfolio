/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: { 
    screens:{
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px"
    },
    extend: {
      colors: { 
        default: '#444452', 
        defaultSecondary: '#636376', 
        logo: '#42B883',
        dark:{
          body: '#171c28', 
          default: '#afafbf',
          defaultSecondary: '#AFAFAF',
          primary: '#e7e7e7', 
          secondary: '#007bff',
          test: '#131721'
        } 
      },
      fontFamily:{
        montserrat: ['Montserrat'],
        montserratAlternates: ['Montserrat Alternates']
      }
    },
  },
  plugins: [],
}