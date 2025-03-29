import styled, { DefaultTheme } from "styled-components/native";

type ButtonsVariantsProps = "FILL" | "OUTLINE";

type Props = {
  variant: ButtonsVariantsProps;
}

const Fill = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "FILL" ? theme.COLORS.GRAY_200 : "transparent" };
  border-radius: 6px;
`;

const TextButton = styled.Text`
  color: ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "FILL" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM };
  text-align: center;
`;

export { Fill, TextButton, ButtonsVariantsProps };