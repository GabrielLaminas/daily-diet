import { mealGetData } from "storage/meal/mealGetAll";

export default async function generateId(title: string){
  try {
    const mealData = await mealGetData(title);
    let id = 0;

    if(mealData && mealData.length > 0){
      id = Math.max(...mealData.map(meal => meal.id ? meal.id : 0)); 
      return id + 1;
    } else {
      return id;
    }
  } catch (error) {
    console.log(error);
  }
}