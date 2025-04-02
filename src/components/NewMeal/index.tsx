import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import { ButtonFill } from "@components/Button";

export default function NewMeal({ ...rest }: TouchableOpacityProps) {
  return (
    <Container>
      <Title>Refeições</Title>
      
      <ButtonFill 
        text="Nova refeição" 
        variant="FILL"
        name="plus"
        {...rest}
      />
    </Container>
  );
}
