import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductContainer from '../../components/Products/CardProductContainer'
import ProductDetails from '../../components/Products/ProductDetalis'
import RateContainer from '../../components/Rate/RateContainer'

const ProductDetailsPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetails />
                <RateContainer />
                <CardProductContainer title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetailsPage
