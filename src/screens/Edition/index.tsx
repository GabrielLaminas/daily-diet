import { View } from "react-native";
import React from "react";
import { 
  Container, ContentContainer, ColumnContainer, RowContainer,
  DietContainer, LabelDiet, ContainerSelect, SelectView, Circle, TextSelect 
} from "./styles";
import Title from "@components/Title";
import Input from "@components/Input";
import { ButtonFill } from "@components/Button";
import { useRoute } from "@react-navigation/native";

interface EditionProps {
  title: string;
  name: string;
  hour: string;
  meal: string;
  status: "SUCCESS" | "FAIL";
}

export default function Edition() {
  const route = useRoute();
  const params = route.params as EditionProps;

  return (
    <Container>
      <Title 
        title="Editar refeição"
      />

      <ContentContainer>
        <ColumnContainer>
          <Input 
            label="Nome"
            defaultValue={params.name}
          />

          <Input 
            label="Descrição"
            multiline
            numberOfLines={4}
            autoCorrect={false}
            defaultValue={params.meal}
            style={{height: 120, minHeight: 120, textAlignVertical: 'top'}}
          />

          <RowContainer style={{ gap: 20 }}>
            <View style={{flex: 1}}>
              <Input 
                label="Data"
                defaultValue={params.title}
              />
            </View>

            <View style={{flex: 1}}>
              <Input 
                label="Hora"
                defaultValue={params.hour}
              />
            </View>
          </RowContainer>

          <DietContainer>
            <LabelDiet>Está dentro da dieta?</LabelDiet>

            <RowContainer style={{ gap: 8 }}>
              <ContainerSelect checked={params.status === "SUCCESS" ? "SUCCESS" : null}>
                <SelectView>
                  <Circle variant="SUCCESS" />
                  <TextSelect>Sim</TextSelect>
                </SelectView>
              </ContainerSelect>

              <ContainerSelect checked={params.status === "FAIL" ? "FAIL" : null}>
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
