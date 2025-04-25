import AsyncStorage from "@react-native-async-storage/async-storage";
import { PROFILE_COLLECTION } from "storage/storageConfig";

export default async function profileGet(){
  try {
    const storage = await AsyncStorage.getItem(PROFILE_COLLECTION);

    if(!storage) return null;
    return storage;
  } catch (error) {
    console.log(error);
  }
}