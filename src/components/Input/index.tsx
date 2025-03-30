import { TextInputProps } from "react-native";
import React from "react";
import { Container, Label, TextInput } from "./styles";

type InputProps = TextInputProps & {
  label: string;
}

export default function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>

      <TextInput 
        {...rest}
      />
    </Container>
  );
}
