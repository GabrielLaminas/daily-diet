import styled, { DefaultTheme } from "styled-components/native";

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
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`;  

const ColumnContainer = styled.View`
  flex-direction: column;
  /* gap: 24px; */
`;

const InfoContainer = styled.View`
  gap: 8px;
  margin-bottom: 24px;
`;

const MealTitle = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: 20px;
`;

const MealDescription = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.BASE }px;
`;

const DateTimeTitle = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
`;

const DateTimeInfo = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.BASE }px;
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
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
`;

export { 
  Container, ContentContainer, ColumnContainer, InfoContainer, MealTitle, MealDescription,
  DateTimeTitle, DateTimeInfo, TagContainer, TagCircle, TagInfo, VariantProps
}