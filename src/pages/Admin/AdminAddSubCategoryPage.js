import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
// import AdminAllProducts from '../../components/Admin/AdminAllProducts'
// import Pagination from '../../components/utility/Pagination'
import AdminAddSubCategory from '../../components/Admin/AdminAddSubCategory'
const AdminAddSubCategoryPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="4" xs="12" md="3" lg="2" className="mb-4">
                    <AdminSideBar />
                </Col>

                <Col sm="8" xs="12" md="9" lg="10">
                     <AdminAddSubCategory />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddSubCategoryPage
