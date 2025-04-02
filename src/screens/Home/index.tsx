import React from "react";
import { SectionList, Text, View } from "react-native";
import { Container } from "./styles";
import Header from "@components/Header";
import Percent from "@components/Percent";
import NewMeal from "@components/NewMeal";
import { Meal, TitleMeal } from "@components/Meal";
import { useNavigation } from "@react-navigation/native";

interface DataInfoProps {
  name: string;
  hour: string;
  meal: string;
  status: "SUCCESS" | "FAIL";
}

interface DataProps {
  title: string;
  data: DataInfoProps[]
}

const DATA: DataProps[] = [
  {
    title: "12.08.22",
    data: [
      { hour: "20:00", name: "X-tudo", meal: "X-tudo", status: "FAIL" }, 
      { hour: "16:00", name: "Whey protein", meal: "Whey protein com leite", status: "SUCCESS" }, 
      { hour: "12:30", name: "Salada cesar", meal: "Salada cesar com frango grelhado", status: "SUCCESS" }, 
    ],
  }
];

export default function Home() {
  const navigation = useNavigation();
  
  function handleOpenPercentage(){
    navigation.navigate("DietDetails", { percent: "90,86", variant: "SUCCESS", sequence: 22, total_meal: DATA.length, in_meal: 99, out_meal: 10 })
  }

  function handleOpenNewMeal(){
    navigation.navigate("Registration")
  }

  function handleOpenInfoMeal({ title, data }: { title: string, data: DataInfoProps}){
    navigation.navigate("InfoMeal", { title: title, meal: data.meal, hour: data.hour, name: data.name, status: data.status })
  }

  return (
    <Container>
      <Header />
      <Percent onPress={handleOpenPercentage} />
      <NewMeal onPress={handleOpenNewMeal} />

      <SectionList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 24, gap: 8}}
        sections={DATA}
        keyExtractor={(item) => item.hour}
        renderItem={({item: { hour, meal, status, name }, section: { title }}) => (
          <Meal 
            hour={hour}
            description={meal}
            status={status}
            onPress={() => handleOpenInfoMeal({title, data: { name, hour, meal, status }})}
          />
        )}
        renderSectionHeader={({section: { title }}) => (
          <TitleMeal title={title} />
        )}
      />
    </Container>
  );
}