/* @flow */
import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20.00px',
  baseLineHeight: 1.3,
  bodyColor: 'hsla(0,0%,0%,0.55)',
  bodyFontFamily: ['Open Sans', 'MundoSans', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  googleFonts: [
    {
      name: 'Amatic SC',
      styles: ['700'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],
  headerColor: 'hsla(0,0%,0%,0.65)',
  headerFontFamily: ['Amatic SC', 'handwriting'],
  headerWeight: 700,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
