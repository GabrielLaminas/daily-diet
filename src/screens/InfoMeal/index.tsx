import { useState} from "react";
import { 
  Container, ContentContainer, ColumnContainer, InfoContainer, MealTitle, MealDescription,
  DateTimeTitle, DateTimeInfo, TagContainer, TagCircle, TagInfo, VariantProps
} from "./styles";
import Title from "@components/Title";
import { ButtonFill } from "@components/Button";
import ModalDelete from "@components/Modal";
import { useRoute, useNavigation } from "@react-navigation/native";

interface InfoMealProps {
  title: string;
  id: number;
  name: string;
  hour: string;
  description: string;
  status: VariantProps;
}

export default function InfoMeal() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as InfoMealProps;

  function handleOpenEditScreen(){
    navigation.navigate("Edition", { title: params.title, id: params.id, name: params.name, description: params.description, hour: params.hour, status: params.status });
  }

  function handleOpenModal(){
    setModalVisible(true);
  }

  function handleBackHome(){
    navigation.navigate("Home");
  }

  return (
    <Container variant={params.status}>
      <Title 
        title="Refeição"
        onPress={handleBackHome}
      />

      <ContentContainer>
        <ColumnContainer>
          <InfoContainer>
            <MealTitle>{params.name}</MealTitle>
            <MealDescription>{params.description}</MealDescription>
          </InfoContainer>

          <InfoContainer>
            <DateTimeTitle>Data e hora</DateTimeTitle>
            <DateTimeInfo>{params.title} às {params.hour}</DateTimeInfo>
          </InfoContainer>

          <TagContainer>
            <TagCircle variant={params.status} />
            <TagInfo>{ params.status === "SUCCESS" ? "dentro da dieta" : "fora da dieta"}</TagInfo>
          </TagContainer>
        </ColumnContainer>

        <ColumnContainer>
          <ButtonFill 
            text="Editar refeição"
            variant="FILL"
            name="edit-3"
            style={{marginBottom: 9}}
            onPress={handleOpenEditScreen}
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
        title={params.title}
        id={params.id}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    </Container>
  );
}
