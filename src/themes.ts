const font = {
  families: {
    heading: "Sen, sans-serif",
    paragraph: "Sen, sans-serif",
  },
  sizes: {
    heading_xl: "60px",
    heading_l: "50px",
    heading_m: "35px",
    heading_s: "22px",
    paragraph_m: "16px",
    paragraph_s: "12px",
  },
};

const breakpoints = {
  smallMobile: 321,
  mobile: 380,
  mobileLarge: 430,
  tablet: 760,
  tabletLarge: 1024,
  desktop: 1440,
  desktopLarge: 1920,
};

export const themes = {
  light: {
    colors: {
      bg: "#FFF",
      accent: "#EF233C",
      lighterAccent: "#ED7C8A",
      font: "#2B2D42",
      buttonFont: "#FFF",
      darkGray: "#505968",
      lightGray: "#8D99AE",
      lightBlue: "#25C3EF",
      lightGreen: "#25EF94",
      lightOrange: "#FFC176",
    },
    breakpoints,
    font,
    transitionSpeed: "0.1s",
    footerHeight: "72px",
    navbarHeight: "88px",
  },
};

export type ThemeType = typeof themes.light;
