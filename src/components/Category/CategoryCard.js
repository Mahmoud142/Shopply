import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CategoryCard = ({ id, title, img }) => {
    return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-3 d-flex justify-content-center"
        >
            <Link
                to={`/products/category/${id}`}
                className="d-flex flex-column align-items-center"
                style={{ textDecoration: "none" }}
            >
                <div
                    style={{
                        width: "150px",
                        height: "110px",
                        borderRadius: "40px",
                        backgroundColor: "#F8F9FA",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        border: "1px solid #EAEAEA"
                    }}
                    className="category-img-wrapper"
                >
                    <img
                        alt={title}
                        src={img}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "40px"
                        }}
                    />
                </div>
                <p className="categoty-card-text my-2">{title}</p>
            </Link>
        </Col>
    );
};

export default CategoryCard;
