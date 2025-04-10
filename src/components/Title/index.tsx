import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TextTitle } from "./styles";
import { ButtonBackIcon } from "@components/Button";

type TitleProps = TouchableOpacityProps & {
  title: string;
}

export default function Title({ title, ...rest }: TitleProps) {
  return (
    <Container>
      <ButtonBackIcon 
        variant="NEUTRAL"
        {...rest}
      />

      <TextTitle>{title}</TextTitle>
    </Container>
  );
}
