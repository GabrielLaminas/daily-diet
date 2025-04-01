import { Modal } from "react-native";
import React from "react";
import { Container, Content, Title, RowContainer } from "./styles";
import { ButtonFill } from "@components/Button";

type ModalDeleteProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalDelete({ visible, setVisible }: ModalDeleteProps) {

  function handleCloseModal(){
    setVisible(false);
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
            />
          </RowContainer>
        </Content>
      </Container>
    </Modal>
  );
}
