import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";

const CategoryContainer = ({ data, loading }) => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">All Categories</div>
            <Row className="my-2 d-flex justify-content-between">
                {loading === false ? (
                    data ? (
                        data.map((item, index) => {
                            return (
                                <CategoryCard
                                    id={item._id}
                                    key={index}
                                    title={item.name}
                                    img={item.image}
                                />
                            );
                        })
                    ) : (
                        <h4>No categories found</h4>
                    )
                ) : (
                    <Spinner animation="border" variant="primary" />
                )}
            </Row>
        </Container>
    );
};

export default CategoryContainer;
