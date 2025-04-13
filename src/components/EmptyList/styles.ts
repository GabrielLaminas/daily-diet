import styled, { DefaultTheme } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.Text`
  text-align: center;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR};
  color: ${( { theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_300};
`;

export { Container, Message };