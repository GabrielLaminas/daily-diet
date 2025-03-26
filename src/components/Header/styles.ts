import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

export { Container, Logo, Avatar };