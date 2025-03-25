import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700 };
`;

const Load = styled.ActivityIndicator.attrs(({ theme }: { theme: DefaultTheme }) => ({
  color: theme.COLORS.GRAY_100,
  size: "large"
}))``;

export { Container, Load };