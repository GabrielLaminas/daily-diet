import { DataInfoDTO, DataMealDTO } from "storage/meal/mealStorageDTO";
import parseDataToString from "./parseDataToString";

export function orderMealsTitle(meals: DataMealDTO[]){
  return meals.sort((a, b) => {
    return parseDataToString(b.title).getTime() - parseDataToString(a.title).getTime();
  });
}

export function orderMealsHours(meals: DataInfoDTO[]){
  return meals.sort((a, b) => b.hour.localeCompare(a.hour));
}