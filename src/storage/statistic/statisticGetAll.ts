import AsyncStorage from "@react-native-async-storage/async-storage";
import { STATISTIC_COLLECTION } from "storage/storageConfig";
import StatisticProps from "./statisticStorageDTO";

export default async function statisticGetAll(){
  try {
    const statistics = await AsyncStorage.getItem(STATISTIC_COLLECTION);
    const data: StatisticProps = statistics && JSON.parse(statistics);
    return data;
  } catch (error) {
    console.log(error);
  }
}