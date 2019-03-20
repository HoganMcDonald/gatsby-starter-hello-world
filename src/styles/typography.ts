import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyFontFamily: ['Domine', 'serif'],
  bodyWeight: 300,
  boldWeight: 600,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['600', '400', '400i'],
    },
    {
      name: 'Domine',
      styles: ['300', '600', '300i'],
    },
  ],
  headerFontFamily: [
    'Montserrat',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  headerWeight: 600,
  scaleRatio: 2.4,
})

export default typography
