module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'L10': ['L10', 'ui-sans-serif']
    },
    fontSize: {
      'h1-title': ['3.2rem', '1.2'],
      'field-text': '1.5rem',
      'crowdsourced': '1.2rem',
      'p-desc': '1.3rem',
      'lead-text': '1.54rem',
      'meta': '1.3rem',
      'body-text': '1.4rem',
      'h2-title': '2.6rem',
      'h3-title': '2rem',
      'h4-title': '1.5rem',
      'links-title': '1.6rem'
    },
    extend: {
      colors: {
        black: '#333',
        lightgray: '#e8ebeb',
        blue: '#006998',
        grayText: '#777',
        blackText: '#000'
      },
      spacing: {
        '56.25%': '56.25%',
        '100%': '100%'
      }

    },
  },
  plugins: [],
}
