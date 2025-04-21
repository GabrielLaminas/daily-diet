import styled, { DefaultTheme, css } from "styled-components/native";

const Container = styled.View`
  gap: 4px;
`;

const Label = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_200 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.SM }px;
  `};
`;

const TextInput = styled.TextInput`
  height: 48px;
  max-height: 48px;
  width: 100%;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 6px;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_100 };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.BASE }px;
    border: 1px solid ${ theme.COLORS.GRAY_500 };
  `}
`;

const ErrorText = styled.Text`
  margin-top: 2px;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.RED_DARK };
    font-family: ${ theme.FONT_FAMILY.REGULAR };
    font-size: ${ theme.FONT_SIZE.XS }px;
  `}
`

export { Container, Label, TextInput, ErrorText };