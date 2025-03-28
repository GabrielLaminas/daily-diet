import React from "react";
import { Container, Title } from "./styles";
import { ButtonFill } from "@components/Button";

export default function NewMeal() {
  return (
    <Container>
      <Title>Refeições</Title>
      
      <ButtonFill 
        text="Nova refeição" 
        variant="FILL"
        name="plus"
      />
    </Container>
  );
}
