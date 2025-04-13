import styled, { DefaultTheme, css } from "styled-components/native";

const Container = styled.View`
  padding: 0 24px 24px 24px;
  flex-direction: row;
  align-items: center;
`;

const TextTitle = styled.Text`
  flex: 1;
  text-align: center;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.LG }px;
  `};
`;

export { Container, TextTitle };