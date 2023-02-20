module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/elements/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend:{
    colors: {
      base: "#ffffff",
      primary: "#000000",
      secondary: "#9c9c9c",
      tertiary: "#6EB6FF",
      success: "#73CB8C",
      error: "#FF6E6E",
    }}
  },
  plugins: [],
};
