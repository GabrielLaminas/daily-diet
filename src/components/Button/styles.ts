import styled, { DefaultTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

type ButtonsVariantsProps = "FILL" | "OUTLINE";

type Props = {
  variant: ButtonsVariantsProps;
}

type ButtonBackProps = "SUCCESS" | "FAIL" | "NEUTRAL";

type ButtonBackIconProps = {
  variant: ButtonBackProps;
}

const Fill = styled.TouchableOpacity`
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "FILL" ? theme.COLORS.GRAY_200 : "transparent" };
  border: 1px solid ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "FILL" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100 };
  border-radius: 6px;
`;

const TextButton = styled.Text`
  color: ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "FILL" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
  text-align: center;
`;

const ButtonBack = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-self: flex-start;
  flex-shrink: 0;
`;

const BackIcon = styled(ArrowLeft)`
  size: 24;
  color: ${({ theme, variant }: { theme: DefaultTheme, variant: ButtonBackIconProps["variant"] }) => variant === "SUCCESS" ? theme.COLORS.GREEN_DARK : variant === "FAIL" ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_200 };
`;

export { Fill, TextButton, ButtonBack, BackIcon, ButtonBackProps, ButtonsVariantsProps };