import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const BrandCard = ({ img, id }) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-2 d-flex justify-content-center"
        >
            <Card
                className="my-1"
                style={{
                    width: "100%",
                    height: "151px",
                    borderRadius: "40px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    overflow: "hidden"
                }}
            >
                <Link
                    to={`/products/brand/${id}`}
                    style={{ textDecoration: "none" }}
                >
                    <Card.Img
                        style={{ width: "100%", height: "151px", borderRadius: "40px" }}
                        src={img}
                    />
                </Link>
            </Card>
        </Col>
    );
};

export default BrandCard;
