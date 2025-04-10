import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "storage/storageConfig";
import { DataInfoDTO } from "./mealStorageDTO";
import { mealGetAll, mealGetData } from "./mealGetAll";
import { orderMealsHours } from "@utils/orderMeals";

export default async function mealEdit(title: string, data: DataInfoDTO){
  try {
    const mealsAll = await mealGetAll();
    const mealsGetData = await mealGetData(title);
    let updateMeal: DataInfoDTO[] = [];
    
    if(mealsGetData && mealsGetData.length > 0){
      const existsHour = mealsGetData.filter(meal => meal.id !== data.id && meal.hour.includes(data.hour));

      if(existsHour && existsHour.length > 0){
        throw new Error(`Horário de ${data.hour} já foi registrado!`);
      }

      updateMeal = mealsGetData.map((meal) => {
        if(meal.id === data.id){
          meal.name = data.name;
          meal.hour = data.hour;
          meal.description = data.description;
          meal.status = data.status;
        }
        return meal;
      });
    }

    if(!mealsAll) return;

    const meals = mealsAll.map((meal) => {
      if(meal.title === title){
        meal.data = [...orderMealsHours(updateMeal)];
      }
      return meal;
    });

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}
