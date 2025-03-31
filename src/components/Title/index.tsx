import React from "react";
import { Container, TextTitle } from "./styles";
import { ButtonBackIcon } from "@components/Button";

type TitleProps = {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Container>
      <ButtonBackIcon 
        variant="NEUTRAL"
      />

      <TextTitle>{title}</TextTitle>
    </Container>
  );
}
