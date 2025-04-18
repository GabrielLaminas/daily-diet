import styled, { DefaultTheme, css } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.Text`
  text-align: center;
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-size: ${ theme.FONT_SIZE.SM}px;
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    color: ${ theme.COLORS.GRAY_300 };
  `};
`;

export { Container, Message };