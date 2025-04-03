import { View } from "react-native";
import { useState } from "react";
import { 
  Container, ContentContainer, ColumnContainer, RowContainer, SelectBoxProps,
  DietContainer, LabelDiet, ContainerSelect, SelectView, Circle, TextSelect, VariantProps
} from "./styles";
import Title from "@components/Title";
import Input from "@components/Input";
import { ButtonFill } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

interface RegistrationProps {
  title: string;
  description: string;
  date: string;
  hour: string;
  status: SelectBoxProps;
}

export default function Registration() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [status, setStatus] = useState<SelectBoxProps>("NEUTRAL");

  const navigation = useNavigation();

  function handleRegistrationMeal(){
    const registration: RegistrationProps = {
      title: name,
      description,
      date,
      hour,
      status
    }

    if(registration.title && registration.description && registration.date && registration.hour && registration.status){
      navigation.navigate("Feedback", { status: status as VariantProps })
    }

    console.log(registration)
  }

  function handleChangeStatusDiet(status: SelectBoxProps){
    setStatus(status);
  }

  return (
    <Container>
      <Title 
        title="Nova refeição"
      />
      <ContentContainer>
        <ColumnContainer>
          <Input 
            label="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Input 
            label="Descrição"
            multiline
            numberOfLines={4}
            autoCorrect={false}
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={{height: 120, minHeight: 120, textAlignVertical: 'top'}}
          />

          <RowContainer style={{ gap: 20 }}>
            <View style={{flex: 1}}>
              <Input 
                label="Data"
                value={date}
                onChangeText={(text) => setDate(text)}
              />
            </View>

            <View style={{flex: 1}}>
              <Input 
                label="Hora"
                value={hour}
                onChangeText={(text) => setHour(text)}
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
          </DietContainer>
        </ColumnContainer>

        <ButtonFill 
          text="Cadastrar refeição"
          variant="FILL"
          onPress={() => handleRegistrationMeal()}
        />
      </ContentContainer>
    </Container>
  );
}
