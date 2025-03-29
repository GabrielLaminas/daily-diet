import React from "react";
import { ViewProps } from "react-native";
import { Container, Title, Body, BoxVariantProps } from "./styles";

type BoxProps = ViewProps & {
  title: string;
  body: string;
  variant: BoxVariantProps;
}

export default function Box({ title, body, variant, ...rest }: BoxProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
}
