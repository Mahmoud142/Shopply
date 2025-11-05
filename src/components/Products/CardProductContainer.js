import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle }) => {
  return (
    <Container className="my-4">
      <SubTitle title={title} btntitle={btntitle} />
      <Row className="my-3 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
