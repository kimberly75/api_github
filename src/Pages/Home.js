import React from "react";
import { Container } from "react-bootstrap";
import Search from "./../Container/Search";
import Communication from "../Components/Communication";
import "./customHome.scss";

export default function Home() {
  return (
    <>
      <Communication />
      <Container className="containerHome">
        <Search />
      </Container>
    </>
  );
}
