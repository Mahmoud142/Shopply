
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminEditProducts from "../../components/Admin/AdminEditProducts";
const AdminEditProductsPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="4" xs="12" md="3" lg="2" className="mb-4">
          <AdminSideBar />
        </Col>

        <Col sm="8" xs="12" md="9" lg="10">
          <AdminEditProducts />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminEditProductsPage;
