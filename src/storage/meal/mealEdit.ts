import { MEAL_COLLECTION } from "storage/storageConfig";
import { DataInfoDTO, DataMealDTO } from "./mealStorageDTO";
import { mealGetAll, mealGetData } from "./mealGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function mealEdit(title: string, data: DataInfoDTO){
  try {
    const mealsAll = await mealGetAll();
    const mealsGetData = await mealGetData(title);
    let updateMeal: DataInfoDTO[] = [];
    
    if(mealsGetData && mealsGetData.length > 0){
      updateMeal = mealsGetData.map((meal) => {
        if(meal.hour === data.hour){
          meal.name = data.name;
          meal.description = data.description;
          meal.status = data.status;
        }
        return meal;
      });
    }

    if(!mealsAll) return;

    const meals = mealsAll.map((meal) => {
      if(meal.title === title){
        meal.data = [...updateMeal];
      }
      return meal;
    });

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}