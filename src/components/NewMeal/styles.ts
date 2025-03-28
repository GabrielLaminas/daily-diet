import styled, { DefaultTheme } from "styled-components/native";

const Container = styled.View`
  width: 100%;
  gap: 8px;
`;

const Title = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.BASE}px;
`;

export { Container, Title };