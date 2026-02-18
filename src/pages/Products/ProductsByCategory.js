import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Pagination from "../../components/utility/Pagination";
import CardProductsContainer from "./../../components/Products/CardProductContainer";
import { useParams } from "react-router-dom";
import ViewAllProductsCategoryHook from "./../../hook/product/view-all-products-category-hook";

const ProductsByCategory = () => {
    const { id } = useParams();
    // console.log('id :',id);
    const [items, pagination, onPress] = ViewAllProductsCategoryHook(id);
    const pageCount = pagination ? pagination : 0;
    // console.log('items in products by category :',items);
    return (
        <div style={{ minHeight: "670px" }}>
            <Container>
                <Row className="d-flex flex-row">
                    <Col sm="12">
                        <CardProductsContainer
                            products={items}
                            title=""
                            btntitle=""
                        />
                    </Col>
                </Row>

                <Pagination pageCount={pageCount} onPress={onPress} />
            </Container>
        </div>
    );
};

export default ProductsByCategory;
