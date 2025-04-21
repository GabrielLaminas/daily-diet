import { TextInput, TextInputProps } from "react-native";
import React, { forwardRef } from "react";
import { Container, Label, TextInput as TextInputStyle, ErrorText } from "./styles";

type InputProps = TextInputProps & {
  label: string;
  error?: string;
  isReadOnly?: boolean;
}

const Input = forwardRef<TextInput, InputProps>(({ label, error, isReadOnly = false, ...rest }, ref) => {
  return (
    <Container>
      <Label>{label}</Label>

      <TextInputStyle 
        ref={ref}
        readOnly={isReadOnly}
        style={ isReadOnly ? { opacity: 0.5 }: { opacity: 1 } }
        {...rest}
      />

      { error && <ErrorText>{error}</ErrorText> }
    </Container>
  )
})

export default Input;
