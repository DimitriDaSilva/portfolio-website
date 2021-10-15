const font = {
  families: {
    heading: 'Sen, sans-serif',
    paragraph: 'Sen, sans-serif',
  },
  sizes: {
    heading_xl: '60px',
    heading_l: '50px',
    heading_m: '16px',
    paragraph_m: '16px',
    paragraph_s: '12px',
  },
};

const breakpoints = {
      mobile: 360,
      tablet: 760,
      desktop: 1440,
      desktopLarge: 1920,
};

export const themes = {
  light: {
    colors: {
      bg: '#FFF',
      accent: '#EF233C',
      lighterAccent: '#ED7C8A',
      font: '#2B2D42',
      buttonFont: '#FFF',
      lightGray: '#8D99AE',
      lightBlue: '#25C3EF',
      lightGreen: '#25EF94',
      lightOrange: '#F1A74D',
    },
    breakpoints,
    font,
    transitionSpeed: '0.1s',
  }
}

export type ThemeType = typeof themes.light;
