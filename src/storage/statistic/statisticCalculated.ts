import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "storage/meal/mealGetAll";
import { DataInfoDTO } from "storage/meal/mealStorageDTO";
import { STATISTIC_COLLECTION } from "storage/storageConfig";
import StatisticProps from "./statisticStorageDTO";


export default async function statisticCalculated(){
  try {
    const meals = await mealGetAll();
    const data: StatisticProps = {
      percent: 0,
      variant: "NEUTRAL",
      sequence: 0,
      total_meal: 0,
      in_meal: 0,
      out_meal: 0
    }

    if(meals && meals.length > 0) {
      const total_meal = meals.map(meal => meal.data.length).reduce((acc, cur) => acc + cur);
      const in_meal = meals.flatMap(meal => meal.data).filter(meal => meal.status === "SUCCESS").length;
      const out_meal = meals.flatMap(meal => meal.data).filter(meal => meal.status === "FAIL").length;
      const sequence = meals.reverse().flatMap(meal => meal.data.reverse());

      data.percent = ( (in_meal * 100) / (in_meal + out_meal) );
      data.variant = data.percent === 0 ? "NEUTRAL" : data.percent < 50 ? "FAIL" : "SUCCESS";
      data.total_meal = total_meal;
      data.in_meal = in_meal;
      data.out_meal = out_meal;
      data.sequence = getTheBestSequence(sequence);
    }
    await AsyncStorage.setItem(STATISTIC_COLLECTION, JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
  }
}

function getTheBestSequence(dataInfo: DataInfoDTO[]){
  const sequence = [];
  let sequenceCurrent = 0;

  for(let index = 0; dataInfo.length > index; index++){
    if(dataInfo[index].status === "SUCCESS"){
      sequenceCurrent++;
    } else {
      if(sequenceCurrent !== 0){
        sequence.push(sequenceCurrent);
      }
      sequenceCurrent = 0;
    }   
  }

  if(sequenceCurrent !== 0){
    sequence.push(sequenceCurrent);
  }
  if(sequence.length === 0 && sequenceCurrent === 0) {
    sequence.push(0);
  } 

  return Math.max(...sequence);
}