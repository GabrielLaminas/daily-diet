import styled, { DefaultTheme, css } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .25);
`;

const Content = styled.View`
  width: 100%;
  padding: 40px 24px 24px 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_700 };
  border-radius: 8px;
`;

const Title = styled.Text`
  margin-bottom: 32px;
  padding: 0 24px;
  text-align: center;
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${ theme.COLORS.GRAY_200 };
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.LG }px;
  `};
  
`;

const RowContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export { Container, Content, Title, RowContainer }