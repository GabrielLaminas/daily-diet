import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "storage/storageConfig";
import { DataMealDTO } from "./mealStorageDTO";

export async function mealGetAll(){
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: DataMealDTO[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    console.log(error)
  }
}

export async function mealGetData(title: string){
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: DataMealDTO[] = storage ? JSON.parse(storage) : [];
    
    if(meals.length === 0) return [];

    const titleInMeals = meals.filter(m => m.title === title);

    if(titleInMeals.length > 0){
      const mealDataInfo = titleInMeals[0].data;
      return mealDataInfo;
    }
  } catch (error) {
    console.log(error);
  }
}