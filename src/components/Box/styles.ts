import styled, { DefaultTheme, css } from "styled-components/native";

type BoxVariantProps = "SUCCESS" | "FAIL" | "NEUTRAL";

type Props = {
  variant: BoxVariantProps;
}

const Container = styled.View`
  padding: 16px 18px;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : variant === "FAIL" ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600 };
  border-radius: 8px;
`;

const Title = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-size: ${ theme.FONT_SIZE["2XL"] }px;
    font-family: ${ theme.FONT_FAMILY.BOLD }; 
  `};
  text-align: center;
  flex-shrink: 0;
`

const Body = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_200 };
    font-size: ${ theme.FONT_SIZE.SM }px;
    font-family: ${ theme.FONT_FAMILY.REGULAR }; 
  `};
  text-align: center;
  flex-shrink: 0;
`

export { Container, Title, Body, BoxVariantProps };