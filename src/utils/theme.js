import { DefaultTheme, Colors } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.blue600,
    secondary: Colors.blue400,
    error: Colors.red500
  }
};
