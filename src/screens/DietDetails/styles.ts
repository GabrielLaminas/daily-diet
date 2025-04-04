import styled, { DefaultTheme } from "styled-components/native";

type DietDatailsVariant = "SUCCESS" | "FAIL";

type Props = {
  variant: DietDatailsVariant;
}

const Container = styled.View`
  padding-top: 56px;
  flex: 1;
  background-color: ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`;

const PercentContainer = styled.View`
  padding: 0 24px 34px 24px;
  gap: 2px;
  align-items: center;
`;

const PercentTitle = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE["3XL"] }px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD }; 
  text-align: center;
`;

const PercentBody = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200 };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR }; 
  text-align: center;
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: 33px 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700 };
  border-radius: 20px 20px 0 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`;  

const ContentContainerTitle = styled.Text`
  margin-bottom: 23px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD }; 
  text-align: center;
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