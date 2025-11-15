import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import SearchCountResult from "../../components/utility/SearchCountResult";
import SideFilter from "../../components/utility/SideFilter";
import CardProductsContainer from "../../components/Products/CardProductContainer";
import Pagination from "../../components/utility/Pagination";
const ShopProductPage = () => {
  return (
    <div>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="جميع المنتجات" />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <div className="d-flex flex-wrap">
              <CardProductsContainer />
            </div>
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductPage;
