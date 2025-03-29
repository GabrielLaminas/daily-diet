import styled, { DefaultTheme } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 64px 24px 0 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700 }
`;

export { Container };