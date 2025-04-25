import { TouchableOpacityProps } from "react-native";
import React from "react";
import { 
  Container, FlexContainer, Title, Hour, Divisor, Description, Status, StatusProps 
} from "./styles";

type MealProps = TouchableOpacityProps & {
  hour: string;
  description: string;
  status: StatusProps | "NEUTRAL";
}

export function Meal({ hour, description, status, ...rest }: MealProps) {
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

export function TitleMeal({ title }: { title: string }){
  const [ day, month, year ] = title.split("/");
  const date = `${day}.${month}.${year.slice(2)}`;
  return <Title>{date}</Title>
}
