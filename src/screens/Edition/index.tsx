import { View } from "react-native";
import React from "react";
import { 
  Container, ContentContainer, ColumnContainer, RowContainer,
  DietContainer, LabelDiet, ContainerSelect, SelectView, Circle, TextSelect 
} from "./styles";
import Title from "@components/Title";
import Input from "@components/Input";
import { ButtonFill } from "@components/Button";

interface MealProps {
  name: string;
  description: string;
  data: Date;
  hour: string;
  status: "SUCCESS" | "FAIL";
}

export default function Edition() {

  return (
    <Container>
      <Title 
        title="Editar refeição"
      />

      <ContentContainer>
        <ColumnContainer>
          <Input 
            label="Nome"
          />

          <Input 
            label="Descrição"
            multiline
            numberOfLines={4}
            autoCorrect={false}
            style={{height: 120, minHeight: 120, textAlignVertical: 'top'}}
          />

          <RowContainer style={{ gap: 20 }}>
            <View style={{flex: 1}}>
              <Input 
                label="Data"
              />
            </View>

            <View style={{flex: 1}}>
              <Input 
                label="Hora"
              />
            </View>
          </RowContainer>

          <DietContainer>
            <LabelDiet>Está dentro da dieta?</LabelDiet>

            <RowContainer style={{ gap: 8 }}>
              <ContainerSelect>
                <SelectView>
                  <Circle variant="SUCCESS" />
                  <TextSelect>Sim</TextSelect>
                </SelectView>
              </ContainerSelect>

              <ContainerSelect>
                <SelectView>
                  <Circle variant="FAIL" />
                  <TextSelect>Não</TextSelect>
                </SelectView>
              </ContainerSelect>
            </RowContainer>
          </DietContainer>
        </ColumnContainer>

        <ButtonFill 
          text="Salvar alterações"
          variant="FILL"
        />
      </ContentContainer>
    </Container>
  );
}
