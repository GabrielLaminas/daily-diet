import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "storage/storageConfig";
import { DataInfoDTO, DataMealDTO } from "./mealStorageDTO";
import { mealGetAll, mealGetData } from "./mealGetAll";

export default async function mealCreate(meal: DataMealDTO){
  try {
    const meals = await mealGetAll();

    if(meals && meals.length > 0) {
      const titleInMeals = meals.filter((m) => m.title.includes(meal.title));

      if(titleInMeals.length > 0){
        const existendsMeals = meals.map((m) => {
          if(m.title === meal.title){
            m.data.unshift(...meal.data);
          }
          return m;
        });
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(existendsMeals));
      } else {
        meals.push(meal);
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
      }
    } else {
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([meal]));
    }
  } catch (error) {
    console.log(error)
  }
}