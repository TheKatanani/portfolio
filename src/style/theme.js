const fontSizes = {
  h1: 1.8,
  h2: 1.5,
  h3: 1.35,
  h4: 1.2,
  h5: 1.1,
  h6: 1.05,
  body: 0.875,
  body2: 0.76,
};
const media = {
  // X-Small devices (portrait phones, less than 576px)
  xs:'@media (max-width: 575.9px)',
  // Small devices (landscape phones, 576px and up)
  s: '@media (min-width: 576px)',
  // Medium devices (tablets, 768px and up)
  m: '@media (min-width: 768px)',
  // Large devices (desktops, 992px and up)
  l: '@media (min-width: 992px)',
  // X-Large devices (large desktops, 1200px and up)
  xl: '@media (min-width: 1200px)',
  // XX-Large devices (larger desktops, 1400px and up)
  xxl: '@media (min-width: 1400px)'
}
const ColorApp = {
  primary: "#f4ece6",
  secondary:"#e6dace",
  third:"#0050ff",
  third_bold:"#0000ee",
  dark: "#1C1C1C",
  white: "#FFFFFF",
  card_hover: "#f2f7f2",
  gray_800: "#606060",
  gray_600: "#505050",
  gray_500: "#8B96A5",
  gray_400: "#BBBCBE",
  gray_300: "#E3E8EE",
  gray_200: "#EFF2F4",
  gray_100: "#F7FAFC",
}
export const lightTheme = {
  theme: 'light',
  palette: {
      main: ColorApp.white,
      ColorApp,
      page: ColorApp.gray_100,
      font: ColorApp.dark,
  },
  fontSizes,
  media
};

export const darkTheme = {
  theme: 'dark',
  palette: {
      main: ColorApp.dark,
      ColorApp: {
          ...ColorApp,
          gray_800: "#F7FAFC",
          gray_600: "#EFF2F4",
          gray_500: "#E3E8EE",
          gray_300: "#8B96A5",
          gray_200: "#505050",
          gray_100: "#606060",
      },
      page: ColorApp.gray_800,
      font: ColorApp.white,
  },
  fontSizes,
  media
};