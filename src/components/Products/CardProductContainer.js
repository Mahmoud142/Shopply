import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";
import ProductCard from "./ProductCard";
import { ToastContainer } from "react-toastify";
import CardContainerHook from "./../../hook/product/card-container-hook";

const CardProductsContainer = ({ products, title, btntitle, pathText }) => {
    const [favProd] = CardContainerHook();

    return (
        <Container className="my-4">
            {products ? (
                <SubTitle
                    title={title}
                    btntitle={btntitle}
                    pathText={pathText}
                />
            ) : null}
            <Row className="my-2 d-flex justify-content-between">
                {products
                    ? products.map((item, index) => (
                          <ProductCard
                              favProd={favProd}
                              key={index}
                              product={item}
                          />
                      ))
                    : null}
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default CardProductsContainer;
