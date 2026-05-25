import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Pagination from '../../components/utility/Pagination'
import UserSideBar from '../../components/User/UserSideBar'
import UserAddAddress from '../../components/User/UserAddAddress';
const UserAddAddressPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="4" xs="12" md="3" lg="2" className="mb-4">
                    <UserSideBar />
                </Col>

                <Col sm="8" xs="12" md="9" lg="10">
                  <UserAddAddress />
                </Col>
            </Row>
        </Container>
    )
}
export default UserAddAddressPage
