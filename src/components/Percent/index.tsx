import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title, Body, PercentProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: number;
  state?: PercentProps;
}

export default function Percent({ title, state = "NEUTRAL", ...rest}: Props) {
  return (
    <Container {...rest} state={state}>
      <Icon state={state} />
      <Title>{title}%</Title>
      <Body>das refeições dentro da dieta</Body>
    </Container>
  );
}
