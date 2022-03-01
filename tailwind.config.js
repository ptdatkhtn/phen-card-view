module.exports = {
  // important: true,
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'L10': ['L10', 'ui-sans-serif']
    },
    fontSize: {
      'h1-modal-title': '22px',
      'h1-title': '32px',
      'field-text': '15px',
      'crowdsourced': '12px',
      'p-desc': '13px',
      'lead-text': '15.4px',
      'meta': '13px',
      'body-text': '14px',
      'h2-title': '26px',
      'h3-title': '20px',
      'h4-title': '15px',
      'links-title': '16px',
      'chat-icon': '14.4px',
      'clock-icon': '15.4px'
    },
    extend: {
      colors: {
        black: '#333',
        lightgray: '#e8ebeb',
        blue: '#006998',
        grayText: '#777',
        blackText: '#000',
        grayBgTextModal: '#cbcbcb',
        grayTimeStampComment: '#666666'
      },
      spacing: {
        '56.25%': '56.25%',
        '100%': '100%',
        '0.5': '1px',
        '2.5px': '2.5px',
        '5px':'5px',
        '4px':'4px',
        '6px':'6px',
        '3px':'3px',
        'comment-section': '12.5px',
      }

    },
  },
  plugins: [],
  prefix: 'phen-card-tw-',
}
