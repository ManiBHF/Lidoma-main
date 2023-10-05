/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1603px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/social-media-bg.png')",
        'hero-pattern-mb': "url('../images/Union.png')",
        'hero-pattern-footer': "url('../images/footer.png')",
      }
    },
  },
  plugins: [],
}

