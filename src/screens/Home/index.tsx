import React from "react";
import { SectionList, Text, View } from "react-native";
import { Container } from "./styles";
import Header from "@components/Header";
import Percent from "@components/Percent";
import NewMeal from "@components/NewMeal";
import Meal from "@components/Meal";

const DATA = [
  {
    title: '12.08.22',
    data: [
      { hour: "20:00", meal: "X-tudo", diet: false }, 
      { hour: "16:00", meal: "Whey protein com leite", diet: true }, 
      { hour: "12:30", meal: "Salada cesar com frango grelhado", diet: true }, 
    ],
  }
];

export default function Home() {
  
  return (
    <Container>
      <Header />
      <Percent />
      <NewMeal />

      <SectionList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 24, gap: 8}}
        sections={DATA}
        keyExtractor={(item) => item.hour}
        renderItem={({item: { hour, meal, diet }}) => (
          <Meal 
            hour={hour}
            description={meal}
            status={diet ? "SUCCESS" : "FAIL"}
          />
        )}
        renderSectionHeader={({section: { title }}) => (
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
          </View>
        )}
      />
    </Container>
  );
}