import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Container, Logo, SelectAvatar, Avatar } from "./styles";
import logo from "@assets/logo.png";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import profileGet from "storage/profile/profileGet";
import profileCreate from "storage/profile/profileCreate";

const defaultImage = require("@assets/avatar.png");

export default function Header() {
  const [avatar, setAvatar] = useState<string | null>(null);

  async function handlePickImage(){
    try {
      const imageSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1
      });

      if(imageSelected.canceled) return;

      const photoURI = imageSelected.assets[0].uri;

      if(photoURI){
        const photoInfo = await FileSystem.getInfoAsync(photoURI) as { size: number };

        if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 5){
          throw new Error("Essa imagem é muito grande. Escolha uma de até 5MB");
        }

        await profileCreate(photoURI);
        setAvatar(photoURI);
      }
    } catch (error) {
      if(error instanceof Error){
        Alert.alert("Alterar Foto", error.message);
      }
    }
  } 

  useEffect(() => {
    async function getAvatar() {
      const profile = await profileGet();

      if(profile){
        setAvatar(profile);
      }
    }
    getAvatar();
  }, []);

  return (
    <Container>
      <Logo source={logo} />

      <SelectAvatar onPress={handlePickImage}>
        <Avatar source={ avatar ? { uri: avatar } : defaultImage } />
      </SelectAvatar>
    </Container>
  );
}
