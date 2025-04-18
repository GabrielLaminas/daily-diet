import { TextInput, TextInputProps } from "react-native";
import React, { forwardRef } from "react";
import { Container, Label, TextInput as TextInputStyle } from "./styles";

type InputProps = TextInputProps & {
  label: string;
}

const Input = forwardRef<TextInput, InputProps>(({ label, ...rest }, ref) => {
  return (
    <Container>
      <Label>{label}</Label>

      <TextInputStyle 
        ref={ref}
        {...rest}
      />
    </Container>
  )
})

export default Input;
