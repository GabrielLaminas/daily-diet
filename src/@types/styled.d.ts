import "styled-components/native";

declare module 'styled-components/native' {
  export interface DefaultTheme {
    "COLORS": {
      "RED_LIGHT": string;
      "RED_MID": string;
      "RED_DARK": string;
      "GREEN_LIGHT": string;
      "GREEN_MID": string;
      "GREEN_DARK": string;

      "GRAY_100": string;
      "GRAY_200": string;
      "GRAY_300": string;
      "GRAY_400": string;
      "GRAY_500": string;
      "GRAY_600": string;
      "GRAY_700": string;
      "WHITE": string;
    },
    "FONT_FAMILY": {
      "REGULAR": string;
      "BOLD": string;
    },
    "FONT_SIZE": {
      "XS": number,
      "SM": number,
      "BASE": number,
      "LG": number,
      "2XL": number,
      "3XL": number
    }
  }
}