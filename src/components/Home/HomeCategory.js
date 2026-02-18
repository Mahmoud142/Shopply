import { Container, Row } from "react-bootstrap";
import Subtitle from "../utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import HomeCategoryHook from "../../hook/category/home-category-hook";
import { Spinner } from "react-bootstrap";

const HomeCategory = () => {
  const [category, loading, colors] = HomeCategoryHook();

  return (
    <Container>
      <Subtitle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          category && category.data && category.data.length > 0 ? (
            category.data.slice(0, 5).map((item, index) => {
              return (
                  <CategoryCard
                      key={index}
                      id={item._id}
                      title={item.name}
                      img={item.image}
                      background={colors[index]}
                  />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="primary" role="status" aria-label="جاري التحميل" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
