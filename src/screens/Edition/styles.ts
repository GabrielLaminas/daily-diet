import styled, { DefaultTheme } from "styled-components/native";

type SelectBoxProps = "SUCCESS" | "FAIL" | "NEUTRAL";
type VariantProps = Exclude<SelectBoxProps, "NEUTRAL">;

type Props = {
  checked?: SelectBoxProps;
  variant: VariantProps;
}

const Container = styled.View`
  flex: 1;
  padding-top: 56px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_500 };
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
  gap: 24px;
`;

const RowContainer = styled.View`
  flex-direction: row;
`;

const DietContainer = styled.View``;

const LabelDiet = styled.Text`
  margin-bottom: 8px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
`;

const ContainerSelect = styled.TouchableOpacity`
  padding: 16px;
  flex: 1;
  gap: 8px;
  background-color: ${({ theme, checked }: { theme: DefaultTheme, checked: Props["checked"] }) => checked === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : checked === "FAIL" ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600 };
  border: 1px solid ${({ theme, checked }: { theme: DefaultTheme, checked: Props["checked"] }) => checked === "SUCCESS" ? theme.COLORS.GREEN_DARK : checked === "FAIL" ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600 };
  border-radius: 6px;
`;

const SelectView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

const Circle = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, variant }: { theme: DefaultTheme, variant: Props["variant"] }) => variant === "SUCCESS" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
  border-radius: 4px;
`;

const TextSelect = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
`;

export { 
  Container, ContentContainer, ColumnContainer, RowContainer, SelectBoxProps,
  DietContainer, LabelDiet, ContainerSelect, SelectView, Circle, TextSelect
};