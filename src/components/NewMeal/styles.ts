import styled, { DefaultTheme, css } from "styled-components/native";

const Container = styled.View`
  width: 100%;
  gap: 8px;
`;

const Title = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    font-size: ${ theme.FONT_SIZE.BASE}px;
  `};
`;

export { Container, Title };