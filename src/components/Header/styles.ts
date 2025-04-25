import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  margin-bottom: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

const SelectAvatar = styled.TouchableOpacity``

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #1B1D1E;
`;

export { Container, Logo, SelectAvatar, Avatar };