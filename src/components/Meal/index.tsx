import { Text, TouchableOpacityProps, TextProps } from "react-native";
import React from "react";
import { Container, FlexContainer, Hour, Description, Status, StatusProps } from "./styles";

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
        <Text>{" | "}</Text>
        <Description numberOfLines={1}>{description}</Description>
      </FlexContainer>

      <Status status={status} />
    </Container>
  );
}
