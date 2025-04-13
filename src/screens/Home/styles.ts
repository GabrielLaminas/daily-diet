import styled, { DefaultTheme } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  flex: 1;
  padding: 64px 24px 0 24px;
  position: relative;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700 };
`;

const Loading = styled(ActivityIndicator).attrs({
  size: "large",
  color: "#1B1D1E"
})`
  flex: 1;
`;

const Gradient = styled(LinearGradient).attrs({
  colors: [" rgba(250, 250, 250, 0)",  "#FAFAFA"],
})`
  width: 100%;
  height: 160px;
  position: absolute;
  left: 24px;
  bottom: 0;
`;

export { Container, Loading, Gradient };