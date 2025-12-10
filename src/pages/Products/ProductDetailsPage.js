import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductContainer from '../../components/Products/CardProductContainer'
import ProductDetails from '../../components/Products/ProductDetalis'
import RateContainer from '../../components/Rate/RateContainer'
import ViewProductDetailsHook from '../../hook/product/view-product-details-hook'
const ProductDetailsPage = () => {
    const { id } = useParams();
    const [item, images, cat, brand, prod] = ViewProductDetailsHook(id);
    
    return (
      <div style={{ minHeight: "670px" }}>
        <CategoryHeader />
        <Container>
          <ProductDetails />
          <RateContainer />
          <CardProductContainer products={prod} title="منتجات قد تعجبك" />
        </Container>
      </div>
    );
}

export default ProductDetailsPage
