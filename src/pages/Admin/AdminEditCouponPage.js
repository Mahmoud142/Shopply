import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminEditCoupon from "../../components/Admin/AdminEditCoupon";
const AdminEditCouponPage = () => {
    return (
        <Container>
            <Row className="py-3">
                <Col sm="4" xs="12" md="3" lg="2" className="mb-4">
                    <AdminSideBar />
                </Col>

                <Col sm="8" xs="12" md="9" lg="10">
                    <AdminEditCoupon />
                </Col>
            </Row>
        </Container>
    );
};

export default AdminEditCouponPage;
