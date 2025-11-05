import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../../components/Category/CategoryCard";
import img from "../../images/brand1.png";
import img2 from "../../images/brand2.png";
import img3 from "../../images/brand3.png";
import img4 from "../../images/cart.png";
import img5 from "../../images/cat2.png";
const CategoryContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-3 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="الإكسسوارات" background="#f8f9fa" img={img3} />
        <CategoryCard title="الأحذية" background="#f8f9fa" img={img2} />
        <CategoryCard title="حقائب الظهر" background="#f8f9fa" img={img} />
        <CategoryCard title="الإكسسوارات" background="#f8f9fa" img={img3} />
        <CategoryCard title="الأحذية" background="#f8f9fa" img={img2} />
        <CategoryCard title="الملابس" background="#f8f9fa" img={img} />
        <CategoryCard title="المجوهرات" background="#f8f9fa" img={img4} />
        <CategoryCard title="المجوهرات" background="#f8f9fa" img={img4} />
        <CategoryCard title="حقائب اليد" background="#f8f9fa" img={img5} />
        <CategoryCard title="حقائب الظهر" background="#f8f9fa" img={img} />
        <CategoryCard title="حقائب اليد" background="#f8f9fa" img={img5} />
        <CategoryCard title="الملابس" background="#f8f9fa" img={img} />
      </Row>
    </Container>
  );
};
export default CategoryContainer;
