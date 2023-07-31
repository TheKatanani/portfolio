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
  // Extra small devices (portrait phones, less than 576px)
  xs: '@media (max-width: 575.98px)',
  // Small devices (landscape phones, less than 768px)
  s: '@media (max-width: 767.98px)',
  // Medium devices (tablets, less than 992px)
  m: '@media (max-width: 991.98px)',
  // Large devices (desktops, less than 1200px)
  l: '@media (max-width: 1199.98px)'
};

const ColorApp = {
  primary: "#8FACC0",
  secondary:"#D2E4F1",
  third:"#0A4D68",
  third_bold:"#254450",
  dark: "#1C1C1C",
  white: "#FFFFFF",
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