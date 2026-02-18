import { Container, Col, Row } from "react-bootstrap";
import Pagination from "../../components/utility/Pagination";
import CardProductsContainer from "./../../components/Products/CardProductContainer";
import { useParams } from "react-router-dom";
import ViewAllProductsBarndHook from "./../../hook/product/view-all-products-brand-hook";

const ProductsByBrand = () => {
    const { id } = useParams();

    const [items, pagination, onPress] = ViewAllProductsBarndHook(id);
    if (pagination) var pageCount = pagination;
    else pageCount = 0;

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

export default ProductsByBrand;
