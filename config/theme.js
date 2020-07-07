import colors from './_colors'
import sizes from './_sizes';
import fonts from './_fonts';

export const theme = {
  colors: {
    primary: colors.Cyan,
    primaryHover: colors.CyanHover,
    secondary: colors.DarkViolet,
    red: colors.Red,
    gray: colors.Gray,
    grayishViolet: colors.GrayishViolet,
    darkBlue: colors.DarkBlue,
    darkViolet: colors.DarkViolet,
    white: colors.White,
    gray100: colors.Gray100,
  },
  fonts: {
    poppins: fonts.Poppins,
  },
  sizes: {
    container: sizes.container,
  }
}

export default theme;