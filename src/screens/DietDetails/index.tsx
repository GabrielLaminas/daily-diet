import React from "react";
import { 
  Container, PercentContainer, ColumnContainer, RowContainer, PercentTitle, PercentBody, 
  ContentContainer, ContentContainerTitle, DietDatailsVariant 
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ButtonBackIcon } from "@components/Button";
import Box from "@components/Box";
import formatPercentage from "@utils/formatPercentage";
import { ScrollView } from "react-native";

type DietDetailsProps = {
  percent: number;
  variant: DietDatailsVariant;
  sequence: number;
  total_meal: number;
  in_meal: number;
  out_meal: number;
}

export default function DietDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as DietDetailsProps;

  function handleGoBack(){
    navigation.navigate("Home");
  }

  return (
    <Container variant={params.variant}>
      <PercentContainer>
        <ButtonBackIcon 
          variant={params.variant} 
          style={{marginBottom: -16}} 
          onPress={handleGoBack}
        />
        <PercentTitle>{formatPercentage(params.percent)}%</PercentTitle>
        <PercentBody>das refeições dentro da dieta</PercentBody>
      </PercentContainer>

      <ScrollView
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ContentContainer>
          <ContentContainerTitle>Estatísticas gerais</ContentContainerTitle>

          <ColumnContainer>
            <Box 
              title={params.sequence}
              body="melhor sequência de pratos dentro da dieta"
              variant="NEUTRAL"
            />

            <Box 
              title={params.total_meal}
              body="refeições registradas"
              variant="NEUTRAL"
            />

            <RowContainer>
              <Box 
                title={params.in_meal}
                body="refeições dentro da dieta"
                variant="SUCCESS"
                style={{flex: 1}}
              />

              <Box 
                title={params.out_meal}
                body="refeições fora da dieta"
                variant="FAIL"
                style={{flex: 1}}
              />
            </RowContainer>
          </ColumnContainer>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}
