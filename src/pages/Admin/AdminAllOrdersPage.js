import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllOrders from '../../components/Admin/AdminAllOrders'
const AdminAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="4" xs="12" md="3" lg="2" className="mb-4">
                    <AdminSideBar />
                </Col>

                <Col sm="8" xs="12" md="9" lg="10">
                    <AdminAllOrders />
                </Col>
            </Row>
        </Container>
    )
}
export default AdminAllOrdersPage
