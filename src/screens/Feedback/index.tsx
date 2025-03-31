import { Image } from "react-native";
import React from "react";
import { Container, Title, Description, TextBold, VariantFeedback } from "./styles";
import { ButtonFill } from "@components/Button";
import fail from "@assets/illustration-fail.png";
import success from "@assets/illustration-success.png";

export default function Feedback() {
  const dietType: VariantFeedback = "SUCCESS";
  
  return (
    <Container>
      <Title variant={dietType}>
        { dietType === "SUCCESS" ? "Continue assim!" : "Que pena!" }
      </Title>

      {
        dietType === "SUCCESS" 
        ? (
          <Description>
            Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!
          </Description>
        )
        : (
          <Description>
            Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue se esforçando e não desista!
          </Description>
        )
      }

      <Image 
        source={ dietType === "SUCCESS" ? success : fail} 
        resizeMode="cover"
        style={{marginTop: 40, marginBottom: 32}} 
      />
    
      <ButtonFill 
        text="Ir para a página inicial" 
        variant="FILL" 
      />
    </Container>
  )
}
