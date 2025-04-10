import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentProps = "SUCCESS" | "FAIL" | "NEUTRAL";

type Props = {
  state: PercentProps;
}

const Container = styled(TouchableOpacity)`
  margin-bottom: 40px;
  padding: 20px 16px;
  position: relative;
  border-radius: 8px;
  background-color: ${({ theme, state }: { theme: DefaultTheme, state: Props["state"] }) => state === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : state === "FAIL" ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600 };
`;

const Icon = styled(ArrowUpRight).attrs({
  size: 24,
  position: "absolute",
  top: 8,
  right: 8,
})`
  color: ${({ theme, state }: { theme: DefaultTheme, state: Props["state"] }) => state === "SUCCESS" ? theme.COLORS.GREEN_DARK : state === "FAIL" ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_100 };
`;

const Title = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE["3XL"]}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

const Body = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE["SM"]}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;
`;

export { Container, Icon, Title, Body };