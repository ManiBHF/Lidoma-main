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
      'md-1': '425px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1603px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/social-media-bg.png')",
        'hero-pattern-mb': "url('../images/Union.png')",
        'hero-pattern-footer': "url('../images/footer.png')",
        'hero-pattern-footer-mb': "url('../images/bg-foo-mb.png')",
        'hero-pattern-tn': "url('../images/tournament-top.png')",
        'hero-pattern-st': "url('../images/Subtract.png')",
        'btn-tr': "url('../images/btn-tr.png')",
        'header-tor': "url('../images/header-tour.png')",
        'header-tor-mb': "url('../images/header-mb-tour.png')",
        'main-tr': "url('../images/main-tr.png')",
        'inp-btn': "url('../images/btn-inp-new.png')",
        'new-d-1': "url('../images/newv-1.png')",
        'tour-newv': "url('../images/tour-newv.png')",

      }
    },
  },
  plugins: [],
}

