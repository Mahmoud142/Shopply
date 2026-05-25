import { Container, Row } from "react-bootstrap";
import Subtitle from "../utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import HomeCategoryHook from "../../hook/category/home-category-hook";
import { Spinner } from "react-bootstrap";

const HomeCategory = () => {
  const [category, loading] = HomeCategoryHook();

  return (
    <Container className="py-4">
      <Subtitle title="Shop by Category" btntitle="View All" pathText="/allcategory" />
      <Row className="my-4 d-flex justify-content-center g-4">
        {loading === false ? (
          category && category.data && category.data.length > 0 ? (
            category.data.slice(0, 5).map((item, index) => {
              return (
                  <CategoryCard
                      key={index}
                      id={item._id}
                      title={item.name}
                      img={item.image}
                  />
              );
            })
          ) : (
            <p className="text-secondaryText text-sm font-medium">No categories found</p>
          )
        ) : (
          <div className="flex items-center justify-center py-12">
            <Spinner animation="border" variant="primary" role="status" aria-label="Loading..." />
          </div>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
