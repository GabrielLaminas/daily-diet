import { View, Alert, Keyboard, ScrollView, Text } from "react-native";
import { useState } from "react";
import { 
  Container, ContentContainer, ColumnContainer, RowContainer, SelectBoxProps,
  DietContainer, LabelDiet, ContainerSelect, SelectView, Circle, TextSelect, ErrorText
} from "./styles";

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

import mealCreate from "storage/meal/mealCreate";
import { DataMealDTO } from "storage/meal/mealStorageDTO";
import generateId from "@utils/generateId";

import Title from "@components/Title";
import Input from "@components/Input";
import { ButtonFill } from "@components/Button";

import { useNavigation } from "@react-navigation/native";
import { mealSchema } from "validations/validationFields";
import { ValidationError } from "yup";

export default function Registration() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<string | Date>("");
  const [hour, setHour] = useState<string | Date>("");
  const [status, setStatus] = useState<SelectBoxProps>("NEUTRAL");
  const [errors, setErrors] = useState<Record<string, string>>({
    name: "",
    description: "",
    date: "",
    hour: "",
    status: ""
  })

  const navigation = useNavigation();

  async function handleRegistrationMeal(){
    try {
      const id = await generateId(date.toString());
      const meal = await mealSchema.validate({
        name, description, date, hour, status
      }, {abortEarly: false})
      
      if(meal.name && meal.description && meal.date && meal.hour && meal.status){
        const registration: DataMealDTO = {
          title: meal.date,
          data: [
            { 
              id: id ? id : 0, 
              name: meal.name, 
              description: meal.description, 
              hour: meal.hour, 
              status: meal.status
            }
          ]
        }

        await mealCreate(registration);
        navigation.navigate("Feedback", { status: meal.status });
      }
    } catch (error) {
      if(error instanceof ValidationError){
        const formErrors: Record<string, string> = {};

        error.inner.forEach((err) => {
          if (err.path && err.message) {
            formErrors[err.path] = err.message;
          }
        });
        setErrors(formErrors);
      }

      if(error instanceof Error){
        Alert.alert("Nova Refeição", error.message);
      }
    }
  }

  function handleGoHome(){
    navigation.navigate("Home");
  }

  function handleChangeStatusDiet(status: SelectBoxProps){
    setStatus(status);
  }

  function handleSetDate(){
    Keyboard.dismiss();
    DateTimePickerAndroid.dismiss("time");
    DateTimePickerAndroid.open({
      mode: "date",
      display: "calendar",
      value: date instanceof Date ? date : new Date(),
      onChange: (event, selectedDate) => {
        if (selectedDate && event.type !== "dismissed") {
          const formatDate = selectedDate.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })
          setDate(formatDate);
        }
      },
    });
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
        title="Nova refeição"
        onPress={handleGoHome}
      />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ flexGrow: 1 }} 
        //permite que toques fora dos inputs fechem o teclado e continuem interagindo normalmente.
        keyboardShouldPersistTaps="handled"
      >
        <ContentContainer>
          <ColumnContainer>
            <Input 
              label="Nome"
              value={name}
              error={errors.name}
              onChangeText={(text) => setName(text)}
            />

            <Input 
              label="Descrição"
              multiline
              numberOfLines={4}
              autoCorrect={false}
              value={description}
              error={errors.description}
              onChangeText={(text) => setDescription(text)}
              style={{height: 120, minHeight: 120, textAlignVertical: 'top'}}
            />

            <RowContainer style={{ gap: 20 }}>
              <View style={{flex: 1}}>
                <Input 
                  label="Data"
                  value={date.toString()}
                  onFocus={handleSetDate}
                  error={errors.date}
                />
              </View>

              <View style={{flex: 1}}>
                <Input 
                  label="Hora"
                  value={hour.toString()}
                  onFocus={handleSetTime}
                  error={errors.hour}
                />
              </View>
            </RowContainer>

            <DietContainer>
              <LabelDiet>Está dentro da dieta?</LabelDiet>

              <RowContainer style={{ gap: 8 }}>
                <ContainerSelect 
                  onPress={() => handleChangeStatusDiet("SUCCESS")} 
                  checked={status === "SUCCESS" ? "SUCCESS" : "NEUTRAL"}
                >
                  <SelectView>
                    <Circle variant="SUCCESS" />
                    <TextSelect>Sim</TextSelect>
                  </SelectView>
                </ContainerSelect>

                <ContainerSelect 
                  onPress={() => handleChangeStatusDiet("FAIL")} 
                  checked={status === "FAIL" ? "FAIL" : "NEUTRAL"}
                >
                  <SelectView>
                    <Circle variant="FAIL" />
                    <TextSelect>Não</TextSelect>
                  </SelectView>
                </ContainerSelect>
              </RowContainer>
              
              { errors.status && <ErrorText>{errors.status}</ErrorText> }
            </DietContainer>
          </ColumnContainer>

          <ButtonFill 
            text="Cadastrar refeição"
            variant="FILL"
            onPress={() => handleRegistrationMeal()}
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}
