import { Container, Logo, Avatar } from "./styles";
import logo from "@assets/logo.png";
import avatar from "@assets/avatar.png";

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Avatar source={avatar} />
    </Container>
  );
}
