import styled, { DefaultTheme, css } from "styled-components/native";

type VariantFeedback = "SUCCESS" | "FAIL";

type Props = {
  variant: VariantFeedback;
}

const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-bottom: 8px;
  text-align: center;
  ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => css`
    color: ${ variant === "SUCCESS" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE["2XL"] }px;
  `};
`;

const Description = styled.Text`
  text-align: center;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BASE }px;
  `};
`;

const TextBold = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
`;

export { Container, Title, Description, TextBold, VariantFeedback };