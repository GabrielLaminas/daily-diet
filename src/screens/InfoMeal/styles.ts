import styled, { DefaultTheme, css } from "styled-components/native";

type VariantProps = "SUCCESS" | "FAIL";

const Container = styled.View`
  flex: 1;
  padding-top: 56px;
  background-color: ${({ theme, variant }: { theme: DefaultTheme, variant: VariantProps}) => variant === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`;

const ContentContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 40px 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700 };
  border-radius: 20px 20px 0 0;
  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.5);
`;  

const ColumnContainer = styled.View`
  flex-direction: column;
`;

const InfoContainer = styled.View`
  gap: 8px;
  margin-bottom: 24px;
`;

const MealTitle = styled.Text`
  font-size: 20px;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
  `};
`;

const MealDescription = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_200 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BASE }px;
  `};
`;

const DateTimeTitle = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.SM }px;
  `};
`;

const DateTimeInfo = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_200 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BASE }px;
  `};
`;

const TagContainer = styled.View`
  padding: 8px 16px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_600 };
  border-radius: 1000px;
`;

const TagCircle = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, variant }: { theme: DefaultTheme, variant: VariantProps }) => variant === "SUCCESS" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
  border-radius: 4px;
`;

const TagInfo = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.SM }px;
  `};
`;

export { 
  Container, ContentContainer, ColumnContainer, InfoContainer, MealTitle, MealDescription,
  DateTimeTitle, DateTimeInfo, TagContainer, TagCircle, TagInfo, VariantProps
}