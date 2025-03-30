import styled, { DefaultTheme } from "styled-components/native";

const Container = styled.View`
  gap: 4px;
`;

const Label = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM }px;
`;

const TextInput = styled.TextInput`
  height: 48px;
  max-height: 48px;
  width: 100%;
  padding: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_100 };
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.REGULAR };
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.BASE };
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_500 };
  border-radius: 6px;
`;

export { Container, Label, TextInput };