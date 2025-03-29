import React from "react";
import { 
  Container, PercentContainer, ColumnContainer, RowContainer, PercentTitle, PercentBody, 
  ContentContainer, ContentContainerTitle, DietDatailsVariant 
} from "./styles";
import { ButtonBackIcon } from "@components/Button";
import Box from "@components/Box";

type DietDetailsProps = {
  percent: string;
  variant: DietDatailsVariant;
}

export default function DietDetails({ percent, variant }: DietDetailsProps) {
  return (
    <Container variant={variant}>
      <PercentContainer>
        <ButtonBackIcon variant={variant} style={{marginBottom: -16}} />
        <PercentTitle>{percent}%</PercentTitle>
        <PercentBody>das refeições dentro da dieta</PercentBody>
      </PercentContainer>

      <ContentContainer>
        <ContentContainerTitle>Estatísticas gerais</ContentContainerTitle>

        <ColumnContainer>
          <Box 
            title="22"
            body="melhor sequência de pratos dentro da dieta"
            variant="NEUTRAL"
          />

          <Box 
            title="109"
            body="refeições registradas"
            variant="NEUTRAL"
          />

          <RowContainer>
            <Box 
              title="99"
              body="refeições dentro da dieta"
              variant="SUCCESS"
              style={{flex: 1}}
            />

            <Box 
              title="10"
              body="refeições fora da dieta"
              variant="FAIL"
              style={{flex: 1}}
            />
          </RowContainer>
        </ColumnContainer>
      </ContentContainer>
    </Container>
  );
}
