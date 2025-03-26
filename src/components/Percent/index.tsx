import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, Body, PercentProps } from "./styles";

type Props = TouchableOpacityProps & {
  title?: string;
  state?: PercentProps;
}

export default function Percent({ title = "90,86%", state = "PRIMARY", ...rest}: Props) {
  return (
    <Container {...rest} state={state}>
      <Icon state={state} />
      <Title>{title}</Title>
      <Body>das refeições dentro da dieta</Body>
    </Container>
  );
}
