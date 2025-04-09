import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "storage/storageConfig";
import { DataMealDTO } from "./mealStorageDTO";
import { mealGetAll, mealGetData } from "./mealGetAll";
import { orderMealsHours, orderMealsTitle } from "utils/orderMeals";

export default async function mealCreate(meal: DataMealDTO){
  try {
    const meals = await mealGetAll();

    if(meals && meals.length > 0) {
      const titleInMeals = meals.filter((m) => m.title.includes(meal.title));
      const oneMeal = await mealGetData(meal.title);

      if(titleInMeals.length > 0 && oneMeal){
        const existendsHours = oneMeal.filter(m => m.hour.includes(meal.data[0].hour));
        
        if(existendsHours.length > 0){
          throw new Error(`Refeição em ${meal.title} no horário ${meal.data[0].hour} já existe, crie uma nova em horários diferentes.`);
        } else {
          const existendsMeals = meals.map((m) => {
            if(m.title === meal.title){
              m.data.unshift(...meal.data);
              m.data = orderMealsHours(m.data);
            }
            return m;
          });

          await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(existendsMeals));
        }
      } else {
        meals.push(meal);
        const orderMeals = orderMealsTitle(meals);
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(orderMeals));
      }
    } else {
      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([meal]));
    }
  } catch (error) {
    throw error;
  }
}
