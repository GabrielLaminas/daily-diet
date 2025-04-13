import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { Container, Loading, Gradient } from "./styles";
import { DataMealDTO, DataInfoDTO } from "storage/meal/mealStorageDTO";

import Header from "@components/Header";
import Percent from "@components/Percent";
import NewMeal from "@components/NewMeal";
import { Meal, TitleMeal } from "@components/Meal";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealGetAll } from "storage/meal/mealGetAll";
import statisticCalculated from "storage/statistic/statisticCalculated";
import statisticGetAll from "storage/statistic/statisticGetAll";
import EmptyList from "@components/EmptyList";

type StateProps = "SUCCESS" | "FAIL" | "NEUTRAL";

export default function Home() {
  const [meals, setMeals] = useState<DataMealDTO[]>([]);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const allMeals = await mealGetAll();
      if(allMeals?.length){
        setMeals(allMeals)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function calculateStatistic(){
    try {
      const statistics = await statisticCalculated();
      if(statistics){
        setTitlePercent(statistics.percent);
        setStatePercent(statistics.variant);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenInfoMeal({ title, meal }: { title: string, meal: DataInfoDTO }){
    navigation.navigate("InfoMeal", { title: title, id: meal.id, name: meal.name, description: meal.description, hour: meal.hour, status: meal.status });
  } 

  useFocusEffect(useCallback(() => {
    calculateStatistic();
    getAllMeals();
  }, []));

  return (
    <Container>
      <Header />
      <Percent 
        title={titlePercent} 
        state={statePercent} 
        onPress={handleOpenPercentage} 
      />
      <NewMeal onPress={handleOpenNewMeal} />

      { 
        loading 
        ? <Loading />
        : (
          <SectionList 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={meals.length === 0 ? { flex: 1 } : { paddingVertical: 24, gap: 8, paddingBottom: 160 }}
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
            ListEmptyComponent={() => (
              <EmptyList 
                message="Cadastre sua primeira refeição!" 
              />
            )}
          />
        )
      }

      <Gradient  />
    </Container>
  );
}