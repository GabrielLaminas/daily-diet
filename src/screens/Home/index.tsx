import { Container } from "./styles";
import React from "react";
import Header from "@components/Header";
import Percent from "@components/Percent";

export default function Home() {
  return (
    <Container>
      <Header />
      <Percent />
    </Container>
  );
}
