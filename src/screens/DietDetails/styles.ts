import styled, { DefaultTheme, css } from "styled-components/native";

type DietDatailsVariant = "SUCCESS" | "FAIL" | "NEUTRAL";

type Props = {
  variant: DietDatailsVariant;
}

const Container = styled.View`
  padding-top: 56px;
  flex: 1;
  background-color: ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : variant === "FAIL" ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600 };
`;

const PercentContainer = styled.View`
  padding: 0 24px 34px 24px;
  gap: 2px;
  align-items: center;
`;

const PercentTitle = styled.Text`
  text-align: center;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-size: ${ theme.FONT_SIZE["3XL"] }px;
    font-family: ${ theme.FONT_FAMILY.BOLD }; 
  `};
`;

const PercentBody = styled.Text`
  text-align: center;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_200 };
    font-size: ${ theme.FONT_SIZE.SM }px;
    font-family: ${ theme.FONT_FAMILY.REGULAR }; 
  `};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: 33px 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700 };
  border-radius: 20px 20px 0 0;
  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.5);
`;  

const ContentContainerTitle = styled.Text`
  margin-bottom: 23px;
  text-align: center;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-size: ${ theme.FONT_SIZE.SM }px;
    font-family: ${ theme.FONT_FAMILY.BOLD }; 
  `};
`;

const ColumnContainer = styled.View`
  flex-direction: column;
  gap: 12px;
`;

const RowContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export { 
  Container, PercentContainer, ColumnContainer, RowContainer, PercentTitle, PercentBody, 
  ContentContainer, ContentContainerTitle, DietDatailsVariant 
};