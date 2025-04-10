import { View } from "react-native";
import { useState } from "react";
import { 
  Container, ContentContainer, ColumnContainer, RowContainer, SelectBoxProps,
  DietContainer, LabelDiet, ContainerSelect, SelectView, Circle, TextSelect 
} from "./styles";
import Title from "@components/Title";
import Input from "@components/Input";
import { ButtonFill } from "@components/Button";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataInfoDTO } from "storage/meal/mealStorageDTO";
import mealEdit from "storage/meal/mealEdit";
import { Alert } from "react-native";

interface EditionProps {
  title: string;
  id: number;
  name: string;
  hour: string;
  description: string;
  status: "SUCCESS" | "FAIL";
}

export default function Edition() {
  const route = useRoute();
  const params = route.params as EditionProps;

  const navigation = useNavigation();

  const [title, setTitle] = useState(params.title);
  const [name, setName] = useState(params.name);
  const [description, setDescription] = useState(params.description);
  const [hour, setHour] = useState(params.hour);
  const [status, setStatus] = useState<SelectBoxProps>(params.status);
  
  function handleChangeStatus(status: SelectBoxProps){
    setStatus(status);
  }

  function handleGoBack(){
    navigation.goBack();
  }

  async function handleMealEdit(title: string, data: DataInfoDTO){
    try {
      await mealEdit(title, data);
      navigation.navigate("InfoMeal", { title, id: data.id, name, description, hour, status });
    } catch (error) {
      if(error instanceof Error){
        Alert.alert("Editar refeição", error.message);
      }
    }
  }

  return (
    <Container>
      <Title 
        title="Editar refeição"
        onPress={handleGoBack}
      />

      <ContentContainer>
        <ColumnContainer>
          <Input 
            label="Nome"
            value={name}
            defaultValue={name}
            onChangeText={(text) => setName(text)}
          />

          <Input 
            label="Descrição"
            multiline
            numberOfLines={4}
            autoCorrect={false}
            value={description}
            defaultValue={description}
            onChangeText={(text) => setDescription(text)}
            style={{height: 120, minHeight: 120, textAlignVertical: 'top'}}
          />

          <RowContainer style={{ gap: 20 }}>
            <View style={{flex: 1}}>
              <Input 
                label="Data"
                value={title}
                defaultValue={title}
                readOnly
                onChangeText={(text) => setTitle(text)}
              />
            </View>

            <View style={{flex: 1}}>
              <Input 
                label="Hora"
                value={hour}
                defaultValue={hour}
                onChangeText={(text) => setHour(text)}
              />
            </View>
          </RowContainer>

          <DietContainer>
            <LabelDiet>Está dentro da dieta?</LabelDiet>

            <RowContainer style={{ gap: 8 }}>
              <ContainerSelect 
                checked={status === "SUCCESS" ? "SUCCESS" : null}
                onPress={() => handleChangeStatus("SUCCESS")}
              >
                <SelectView>
                  <Circle variant="SUCCESS" />
                  <TextSelect>Sim</TextSelect>
                </SelectView>
              </ContainerSelect>

              <ContainerSelect 
                checked={status === "FAIL" ? "FAIL" : null}
                onPress={() => handleChangeStatus("FAIL")}
              >
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
          onPress={() => handleMealEdit(title, { id: params.id, name, description, hour, status })}
        />
      </ContentContainer>
    </Container>
  );
}
