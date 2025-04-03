import { Image } from "react-native";
import React from "react";
import { Container, Title, Description, TextBold, VariantFeedback } from "./styles";
import { ButtonFill } from "@components/Button";
import fail from "@assets/illustration-fail.png";
import success from "@assets/illustration-success.png";
import { useRoute, useNavigation } from "@react-navigation/native";

type FeedBackProps = {
  status: VariantFeedback;
}

export default function Feedback() {
  const route = useRoute();
  const params = route.params as FeedBackProps;
  const navigation = useNavigation();

  function handleGoBackHome(){
    navigation.navigate("Home");
  }
  
  return (
    <Container>
      <Title variant={params.status}>
        { params.status === "SUCCESS" ? "Continue assim!" : "Que pena!" }
      </Title>

      {
        params.status === "SUCCESS" 
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
        source={ params.status === "SUCCESS" ? success : fail} 
        resizeMode="cover"
        style={{marginTop: 40, marginBottom: 32}} 
      />
    
      <ButtonFill 
        text="Ir para a página inicial" 
        variant="FILL" 
        onPress={handleGoBackHome}
      />
    </Container>
  )
}
