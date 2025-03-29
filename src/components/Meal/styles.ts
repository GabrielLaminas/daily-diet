import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

type StatusProps = "SUCCESS" | "FAIL";

type Props = {
  status: StatusProps;
}

const Container = styled(TouchableOpacity)`
  flex: 1;
  padding: 14px 16px 14px 12px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_500 };
  border-radius: 6px;
`;

const FlexContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  flex: 2;
`;

const Title = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.LG }px;
`;

const Hour = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.XS }px;
`;

const Divisor = styled.Text`
  flex-shrink: 0;
  width: 1px;
  height: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_400 };
`;

const Description = styled.Text`
  flex: 1;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.BASE }px;
`;

const Status = styled.Text`
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, status }: { theme: DefaultTheme, status: Props["status"] }) => status === "SUCCESS" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID };
`;

export { 
  Container, FlexContainer, Title, Hour, Divisor, Description, Status, StatusProps 
};