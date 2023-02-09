/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    colors: { 
      'PrimaryBlue': '#13183f',  
      'DarkPink': '#FF6F48', 
      'LightPink': '#F02AA6',
      'LightGray': "#83809A"  
    },
    boxShadow: { 
      'CustomeShadow': '0px 4px 4px 0px #00000040' 

    }
  },
   
  },
  plugins: [],
}
