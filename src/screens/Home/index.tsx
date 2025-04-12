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
import statisticCalculated from "storage/statistic/statisticCalculated";
import statisticGetAll from "storage/statistic/statisticGetAll";

type StateProps = "SUCCESS" | "FAIL" | "NEUTRAL";

export default function Home() {
  const [meals, setMeals] = useState<DataMealDTO[]>([]);
  const [titlePercent, setTitlePercent] = useState(0);
  const [statePercent, setStatePercent] = useState<StateProps>("NEUTRAL");
  const navigation = useNavigation();

  async function handleOpenPercentage(){
    try {
      const statistics = await statisticGetAll();

      if(statistics){
        navigation.navigate("DietDetails", { 
          percent: statistics.percent, 
          variant: statistics.variant, 
          sequence: statistics.sequence, 
          total_meal: statistics.total_meal, 
          in_meal: statistics.in_meal, 
          out_meal: statistics.out_meal 
        });
      }
      
    } catch (error) {
      console.log(error);
    }
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

  async function calculateStatistic(){
    try {
      const mealStatistic = await statisticCalculated();
      if(mealStatistic){
        setTitlePercent(mealStatistic.percent);
        setStatePercent(mealStatistic.variant);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenInfoMeal({ title, meal }: { title: string, meal: DataInfoDTO }){
    navigation.navigate("InfoMeal", { title: title, id: meal.id, name: meal.name, description: meal.description, hour: meal.hour, status: meal.status });
  }

  useEffect(() => {
    calculateStatistic();
    getAllMeals();
  }, []);

  return (
    <Container>
      <Header />
      <Percent 
        title={titlePercent} 
        state={statePercent} 
        onPress={handleOpenPercentage} 
      />
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