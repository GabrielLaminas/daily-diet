import React from "react";
import { Container, TextTitle } from "./styles";
import { ButtonBackIcon } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

type TitleProps = {
  title: string;
}

export default function Title({ title }: TitleProps) {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();  
  }

  return (
    <Container>
      <ButtonBackIcon 
        variant="NEUTRAL"
        onPress={handleGoBack}
      />

      <TextTitle>{title}</TextTitle>
    </Container>
  );
}
