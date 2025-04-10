import { Modal } from "react-native";
import React from "react";
import { Container, Content, Title, RowContainer } from "./styles";
import { ButtonFill } from "@components/Button";
import mealDelete from "storage/meal/mealDelete";
import { useNavigation } from "@react-navigation/native";

type ModalDeleteProps = {
  title: string;
  id: number;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalDelete({ title, id, visible, setVisible }: ModalDeleteProps) {
  const navigation = useNavigation();

  function handleCloseModal(){
    setVisible(false);
  }

  async function handleMealDelete(title: string, id: number){
    try {
      await mealDelete(title, id);
      setVisible(false);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal 
      animationType="fade" 
      transparent
      visible={visible}
      aria-modal={visible}
      statusBarTranslucent //faz com que o modal fique por cima da statusbar
      onRequestClose={() => setVisible(!visible)}
    >
      <Container>
        <Content>
          <Title>Deseja realmente excluir o registro da refeição?</Title>

          <RowContainer>
            <ButtonFill 
              text="Cancelar"
              variant="OUTLINE"
              style={{flex: 1}}
              onPress={handleCloseModal}
            />

            <ButtonFill 
              text="Sim, exluir"
              variant="FILL"
              style={{flex: 1}}
              onPress={() => handleMealDelete(title, id)}
            />
          </RowContainer>
        </Content>
      </Container>
    </Modal>
  );
}
