import AsyncStorage from "@react-native-async-storage/async-storage";
import { PROFILE_COLLECTION } from "storage/storageConfig";

export default async function profileCreate(url: string){
  try {
    await AsyncStorage.setItem(PROFILE_COLLECTION, url);
  } catch (error) {
    console.log(error);
  }
}