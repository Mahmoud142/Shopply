import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Card, Row, Button, Modal } from "react-bootstrap";
import { deleteProduct } from "../../redux/actions/productAction";

const AdminAllProductsCard = ({ product }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await dispatch(deleteProduct(product._id));
    setShow(false);
    window.location.reload();
  };
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">Confirm Delete</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">Are you sure you want to delete this product?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="font bg-success"
            variant="success"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            className="font bg-danger"
            variant="dark"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">
              Remove
            </div>
            <Link
              to={`/admin/editproduct/${product._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit">Edit</div>
            </Link>
          </Col>
        </Row>
        <Link
          to={`/products/${product._id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={product.imageCover}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{product.title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{product.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">EGP</div>
                  <div className="card-price">{product.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
