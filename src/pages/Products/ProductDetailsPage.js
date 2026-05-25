import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import CardProductContainer from "../../components/Products/CardProductContainer";
import ProductDetails from "../../components/Products/ProductDetalis";
import RateContainer from "../../components/Rate/RateContainer";
import ViewProductDetailsHook from "../../hook/product/view-product-details-hook";
const ProductDetailsPage = () => {
    const { id } = useParams();
    const [item, , , , prod] = ViewProductDetailsHook(id);

    let items = [];
    if (prod) items = prod.slice(0, 4);

    let rateAvg = 0;
    let rateQty = 0;
    if (item) {
        rateAvg = item.ratingsAverage;
        rateQty = item.ratingsQuantity;
    }

    return (
        <div style={{ minHeight: "670px" }}>
            <CategoryHeader />
            <Container>
                <ProductDetails />
                <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
                <CardProductContainer
                    products={items}
                    title="Products you may like"
                />
            </Container>
        </div>
    );
};

export default ProductDetailsPage;
