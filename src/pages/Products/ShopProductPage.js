import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import SearchCountResult from "../../components/utility/SearchCountResult";
import SideFilter from "../../components/utility/SideFilter";
import CardProductsContainer from "../../components/Products/CardProductContainer";
import Pagination from "../../components/utility/Pagination";
import ViewSearchProductsHook from "../../hook/product/view-search-products-hook";
const ShopProductPage = () => {
  const [products, pagination, onPress] = ViewSearchProductsHook();
  let pageCount = 0;
  if (pagination) pageCount = pagination;

  return (
    <div>
      <CategoryHeader />
      <Container>
        <SearchCountResult title={`هناك ${products.length} نتيجة بحث`} />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer
              products={products}
              title=""
              btntitle=""
              pathText="/products"
            />
          </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
};

export default ShopProductPage;
