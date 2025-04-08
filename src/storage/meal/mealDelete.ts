import { MEAL_COLLECTION } from "storage/storageConfig";
import { mealGetData, mealGetAll } from "./mealGetAll";
import { DataInfoDTO } from "./mealStorageDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function mealDelete(title: string, hour: string){
  try {
    const mealsData = await mealGetData(title);
    const mealsAll = await mealGetAll();
    let newMealsData: DataInfoDTO[] = [];

    if(mealsData && mealsData.length > 0){
      newMealsData = mealsData.filter((meal) => meal.hour !== hour);
    }
    
    if(!mealsAll) return;

    if(newMealsData.length > 0){
      const meals = mealsAll.map(meal => {
        if(meal.title.includes(title)){
          meal.data = [...newMealsData];
        }
        return meal;
      });

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
    } else {
      const meals = mealsAll.filter(meal => meal.title !== title);
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
    }
  } catch (error) {
    console.log(error);
  }
}