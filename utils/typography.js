import Typography from 'typography';
import SternGrove from 'typography-theme-stern-grove';

SternGrove.headerColor = 'hsla(0,0%,0%,0.65)';
SternGrove.headerWeight = 700;
SternGrove.bodyFontFamily = [
  'Open Sans',
  'MundoSans',
  'Helvetica Neue',
  'Arial',
  'Helvetica',
  'sans-serif',
];
SternGrove.baseFontSize = '20.00px';
SternGrove.baseLineHeight = 1.30;
SternGrove.bodyColor = 'hsla(0,0%,0%,0.55)';
const typography = new Typography(SternGrove);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
