import { View, Text } from "react-native";
import React from "react";
import { 
  Container, ContentContainer, ColumnContainer, InfoContainer, MealTitle, MealDescription,
  DateTimeTitle, DateTimeInfo, TagContainer, TagCircle, TagInfo, VariantProps
} from "./styles";
import Title from "@components/Title";
import { ButtonFill } from "@components/Button";
import ModalDelete from "@components/Modal";

export default function InfoMeal() {
  const [modalVisible, setModalVisible] = React.useState(false);

  function handleOpenModal(){
    setModalVisible(true);
  }

  return (
    <Container>
      <Title 
        title="Refeição"
      />

      <ContentContainer>
        <ColumnContainer>
          <InfoContainer>
            <MealTitle>Sanduíche</MealTitle>
            <MealDescription>Sanduíche de pão integral com atum e salada de alface e tomate</MealDescription>
          </InfoContainer>

          <InfoContainer>
            <DateTimeTitle>Data e hora</DateTimeTitle>
            <DateTimeInfo>12/08/2022 às 16:00</DateTimeInfo>
          </InfoContainer>

          <TagContainer>
            <TagCircle />
            <TagInfo>dentro da dieta</TagInfo>
          </TagContainer>
        </ColumnContainer>

        <ColumnContainer>
          <ButtonFill 
            text="Editar refeição"
            variant="FILL"
            name="edit-3"
            style={{marginBottom: 9}}
          />

          <ButtonFill 
            text="Excluir refeição"
            variant="OUTLINE"
            name="trash-2"
            onPress={handleOpenModal}
          />
        </ColumnContainer>
      </ContentContainer>

      <ModalDelete 
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    </Container>
  );
}
