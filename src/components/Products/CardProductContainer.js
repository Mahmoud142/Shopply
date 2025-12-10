import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle, products, pathText }) => {
  return (
    <Container className="my-4">
      {products ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}
      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
