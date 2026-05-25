import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Modal } from "react-bootstrap";
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
    <Col xs="12" sm="6" md="4" lg="3" className="p-3">
      {/* Premium Confirm Delete Modal */}
      <Modal show={show} onHide={handleClose} centered className="font">
        <div className="p-6 bg-white rounded-3xl border border-borderColor/60 shadow-premium">
          <div className="flex flex-col items-center text-center">
            {/* Warning Icon */}
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4 text-red-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h3 className="text-lg font-bold text-primaryText mb-2">Delete Product</h3>
            <p className="text-xs text-secondaryText mb-6 max-w-xs">
              Are you sure you want to delete <span className="font-semibold text-primaryText">"{product.title}"</span>? This action cannot be undone.
            </p>
            
            <div className="flex gap-3 w-full">
              <button
                onClick={handleClose}
                className="flex-1 py-3 px-4 rounded-xl border border-borderColor/80 text-sm font-semibold text-secondaryText hover:bg-brandBg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-3 px-4 rounded-xl bg-red-500 hover:bg-red-600 text-sm font-semibold text-white shadow-sm transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Gorgeous Luxury Card */}
      <div className="group h-full bg-white rounded-premium border border-borderColor/60 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
        
        {/* Relative Image wrapper with hover effect */}
        <div className="relative aspect-square w-full overflow-hidden bg-brandBg">
          <Link to={`/products/${product._id}`}>
            <img
              src={product.imageCover}
              alt={product.title}
              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          
          {/* Price Tag Overlay */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md border border-borderColor/30 px-2.5 py-1 rounded-full text-xs font-bold text-primaryText shadow-sm flex items-center gap-0.5">
            <span className="text-[9px] text-secondaryText font-medium">EGP</span>
            <span>{product.price}</span>
          </div>

          {/* Rating Tag Overlay */}
          {product.ratingsAverage && (
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-borderColor/30 px-2 py-0.5 rounded-full text-[10px] font-bold text-primaryText shadow-sm flex items-center gap-1">
              <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{product.ratingsAverage}</span>
            </div>
          )}
        </div>

        {/* Product Details Content */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div className="mb-4">
            <Link to={`/products/${product._id}`} className="no-underline">
              <h3 className="text-sm font-bold text-primaryText hover:text-primaryAccent transition-colors line-clamp-2 min-h-[40px] m-0 mb-1.5">
                {product.title}
              </h3>
            </Link>
            {product.category && (
              <span className="text-[10px] font-bold text-secondaryText/60 bg-brandBg px-2 py-0.5 rounded-md uppercase tracking-wider">
                {product.category.name || "Product"}
              </span>
            )}
          </div>

          {/* Quick Stats Row (Quantity) */}
          <div className="flex items-center justify-between border-t border-borderColor/30 pt-3 mb-4">
            <div className="flex flex-col">
              <span className="text-[9px] text-secondaryText/50 uppercase tracking-widest font-extrabold">In Stock</span>
              <span className="text-xs font-black text-primaryText mt-0.5">{product.quantity || 0} units</span>
            </div>
            {product.sold !== undefined && (
              <div className="flex flex-col text-right">
                <span className="text-[9px] text-secondaryText/50 uppercase tracking-widest font-extrabold">Sold</span>
                <span className="text-xs font-black text-secondaryText mt-0.5">{product.sold} units</span>
              </div>
            )}
          </div>

          {/* Premium Actions Row */}
          <div className="flex gap-2">
            <Link
              to={`/admin/edit-product/${product._id}`}
              className="flex-grow no-underline"
            >
              <button className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-brandBg hover:bg-black/5 text-xs font-bold text-primaryText rounded-xl transition-all border border-borderColor/30">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                Edit
              </button>
            </Link>
            
            <button
              onClick={handleShow}
              className="py-2 px-3 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-all border border-red-200/50 flex items-center justify-center"
              aria-label="Delete Product"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </Col>
  );
};

export default AdminAllProductsCard;
