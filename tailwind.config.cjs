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
      'HoverBlue':'#666CA3',
      'DarkPink': '#FF6F48', 
      "HoverPink": '#FF7AC3',
      'LightPink': '#F02AA6',
      'LightGray': "#83809A"  
    },
    boxShadow: { 
      'CustomShadow': '0px 4px 4px 0px #00000040' 

    },
    fontFamily: { 
      'PlusJakarta': 'Plus Jakarta Sans'
    }
  },
   
  },
  plugins: [],
}
