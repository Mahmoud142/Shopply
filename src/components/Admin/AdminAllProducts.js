import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ products }) => {
  return (
    <div className="select-none font">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-black text-primaryText m-0 tracking-tight">
          Products Inventory
        </h1>
        <p className="text-xs text-secondaryText mt-1 mb-0 font-semibold">
          View, edit, search, and manage all store items inside the inventory gallery.
        </p>
      </div>
      
      <div className="mx-[-12px]">
        <Row className="m-0 justify-content-start">
          {products && products.length >= 1 ? (
            products.map((product, index) => {
              return <AdminAllProductsCard key={index} product={product} />;
            })
          ) : (
            <div className="col-12 py-16 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-brandBg flex items-center justify-center text-secondaryText mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-primaryText m-0 mb-1">No products found</h3>
              <p className="text-xs text-secondaryText m-0">Start by adding a new product to your inventory.</p>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default AdminAllProducts;
