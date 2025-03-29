import { TouchableOpacityProps } from "react-native";
import React from "react";
import { 
  Container, FlexContainer, Hour, Divisor, Description, Status, StatusProps 
} from "./styles";

type MealProps = TouchableOpacityProps & {
  hour: string;
  description: string;
  status: StatusProps;
}

export default function Meal({ hour, description, status, ...rest }: MealProps) {
  return (
    <Container {...rest}>
      <FlexContainer>
        <Hour>{hour}</Hour>
        <Divisor>|</Divisor>
        <Description numberOfLines={1}>{description}</Description>
      </FlexContainer>

      <Status status={status} />
    </Container>
  );
}
