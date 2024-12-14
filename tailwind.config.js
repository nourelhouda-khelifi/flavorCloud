module.exports = {
  darkMode: 'class', // This enables the use of the 'dark' class

  content: [
    "./src/app/**/*.html", // Includes all HTML files in the app
    "./src/app/**/*.ts",    // To include all TypeScript files (optional for better purging)
  ],

  theme: {
    extend: {},
  },

  plugins: [],
};
