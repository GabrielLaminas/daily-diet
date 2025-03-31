import styled, { DefaultTheme } from "styled-components/native";

const Container = styled.View`
  padding: 0 24px 24px 24px;
  flex-direction: row;
  align-items: center;
`;

const TextTitle = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.LG };
`;

export { Container, TextTitle };