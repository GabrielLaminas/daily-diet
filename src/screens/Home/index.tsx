import { useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Container } from "./styles";

import { DataMealDTO, DataInfoDTO } from "storage/meal/mealStorageDTO";

import Header from "@components/Header";
import Percent from "@components/Percent";
import NewMeal from "@components/NewMeal";
import { Meal, TitleMeal } from "@components/Meal";

import { useNavigation } from "@react-navigation/native";
import { mealGetAll } from "storage/meal/mealGetAll";

export default function Home() {
  const [meals, setMeals] = useState<DataMealDTO[]>([]);
  const navigation = useNavigation();
  
  function handleOpenPercentage(){
    navigation.navigate("DietDetails", { percent: "90,86", variant: "SUCCESS", sequence: 22, total_meal: 20, in_meal: 99, out_meal: 10 });
  }

  function handleOpenNewMeal(){
    navigation.navigate("Registration");
  }

  async function getAllMeals(){
    try {
      const allMeals = await mealGetAll();
      if(allMeals?.length){
        setMeals(allMeals)
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenInfoMeal({ title, meal }: { title: string, meal: DataInfoDTO }){
    navigation.navigate("InfoMeal", { title: title, id: meal.id, name: meal.name, description: meal.description, hour: meal.hour, status: meal.status });
  }

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <Container>
      <Header />
      <Percent onPress={handleOpenPercentage} />
      <NewMeal onPress={handleOpenNewMeal} />

      <SectionList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 24, gap: 8}}
        sections={meals}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item: { id, hour, description, status, name }, section: { title }}) => (
          <Meal 
            hour={hour}
            description={description}
            status={status}
            onPress={() => handleOpenInfoMeal({ title, meal: { id, name, hour, description, status }})}
          />
        )}
        renderSectionHeader={({section: { title }}) => (
          <TitleMeal title={title} />
        )}
      />
    </Container>
  );
}