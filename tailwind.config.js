/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding:{
        'DEFAULT': '30px',
        'md': '2rem',
        '2xl': '6rem',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1580px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/social-media-bg.png')",
        'hero-pattern-mb': "url('../images/Union.png')",
        'hero-pattern-footer': "url('../images/bg-footer.png')",
        'hero-pattern-footer-mb': "url('../images/bg-foo-mb.png')",
      }
    },
  },
  plugins: [],
}

