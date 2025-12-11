import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        {products && products.length >= 1 ? (
          products.map((product, index) => {
            return <AdminAllProductsCard key={index} product={product} />;
          })
        ) : (
          <p>لا يوجد منتجات لعرضها</p>
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
