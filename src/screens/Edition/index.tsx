import { View, Alert, Keyboard } from "react-native";
import { useState } from "react";
import { 
  Container, ContentContainer, ColumnContainer, RowContainer, SelectBoxProps,
  DietContainer, LabelDiet, ContainerSelect, SelectView, Circle, TextSelect 
} from "./styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import { useRoute, useNavigation } from "@react-navigation/native";

import Title from "@components/Title";
import Input from "@components/Input";
import { ButtonFill } from "@components/Button";

import { DataInfoDTO } from "storage/meal/mealStorageDTO";
import mealEdit from "storage/meal/mealEdit";

interface EditionProps {
  title: string;
  id: number;
  name: string;
  hour: string | Date;
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
  const [hour, setHour] = useState<string | Date>(params.hour);
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

  function handleSetTime(){
    Keyboard.dismiss();
    DateTimePickerAndroid.dismiss("date");
    DateTimePickerAndroid.open({
      mode: "time",
      display: "clock",
      timeZoneName: "America/Sao_Paulo",
      is24Hour: true,
      value: hour instanceof Date ? hour : new Date(),
      onChange: (event, selectTime) => {
        if(selectTime && event.type !== "dismissed"){
          const formatTime = selectTime.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" });
          setHour(formatTime);
        }
      }
    });
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
                value={hour.toString()}
                defaultValue={hour.toString()}
                onFocus={handleSetTime}
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
