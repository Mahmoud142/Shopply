import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import { Col, Row, Button, Modal } from "react-bootstrap";
import mobile from "../../images/mobile.png";

const CartItem = ({ item }) => {
    const [
        ,
        show,
        handleClose,
        handleShow,
        handleDeleteItem,
        itemCount,
        onChangeCount,
        handleUpdateCart,
    ] = DeleteCartHook(item);

    let imageCoverUrl = item?.product?.imageCover || "";
    if (imageCoverUrl && !imageCoverUrl.includes("http")) {
        imageCoverUrl = `http://localhost:3000/products/${imageCoverUrl}`;
    }

    console.log("ITEM DATA:", item);

    return (
        <div className="group relative bg-white border border-borderColor/60 rounded-premium shadow-sm hover:shadow-premium-hover transition-all duration-400 ease-out overflow-hidden p-4 mb-4">
            
            {/* Delete Confirmation Modal */}
            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton className="border-b border-borderColor/40">
                    <Modal.Title className="font-sans font-bold text-lg text-primaryText">Remove Item</Modal.Title>
                </Modal.Header>
                <Modal.Body className="font-sans text-secondaryText text-sm">
                    Are you sure you want to remove <span className="font-bold text-primaryText">{item?.product?.title || ""}</span> from your cart?
                </Modal.Body>
                <Modal.Footer className="border-t border-borderColor/40">
                    <Button variant="light" onClick={handleClose} className="font-sans font-semibold rounded-xl px-4 py-2 border border-borderColor hover:bg-brandBg transition-colors">
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handleDeleteItem} className="font-sans font-bold rounded-xl px-4 py-2 bg-red-500 hover:bg-red-600 border-none transition-colors">
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="align-items-center gy-4">
                {/* Product Image Section */}
                <Col xs="4" sm="3" lg="2">
                    <div className="relative w-full aspect-square rounded-premium-sm overflow-hidden bg-brandBg/50 border border-borderColor/40 flex items-center justify-center p-2 group-hover:bg-brandBg transition-colors duration-300">
                        <img
                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                            src={imageCoverUrl || mobile}
                            alt={item?.product?.title || "Product"}
                            loading="lazy"
                        />
                    </div>
                </Col>

                {/* Product Details Section */}
                <Col xs="8" sm="9" lg="10">
                    <div className="flex flex-col h-full justify-between gap-3">
                        
                        {/* Top row: Category & Delete Button */}
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-primaryAccent uppercase tracking-[0.15em]">
                                    {item?.product?.category?.name || ""}
                                </span>
                                <h4 className="font-sans font-bold text-primaryText text-base md:text-lg m-0 tracking-tight line-clamp-1">
                                    {item?.product?.title || ""}
                                </h4>
                            </div>
                            
                            <button
                                onClick={handleShow}
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent hover:bg-red-50 text-secondaryText hover:text-red-500 transition-all duration-200 border-none cursor-pointer group/btn"
                                aria-label="Remove item"
                            >
                                <svg className="w-4.5 h-4.5 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Middle row: Brand & Attributes */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-1.5 bg-brandBg/60 px-3 py-1 rounded-full border border-borderColor/40">
                                <span className="text-[11px] font-semibold text-secondaryText">Brand:</span>
                                <span className="text-[11px] font-bold text-primaryText">{item?.product?.brand?.name || ""}</span>
                            </div>
                            
                            {item?.color && (
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-semibold text-secondaryText">Color:</span>
                                    <div
                                        className="w-4 h-4 rounded-full border border-borderColor/50 shadow-sm"
                                        style={{ backgroundColor: item.color }}
                                        title={item.color}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Bottom row: Price & Quantity Controls */}
                        <div className="flex items-center justify-between mt-1 pt-3 border-t border-borderColor/30">
                            
                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-semibold text-secondaryText uppercase tracking-wider hidden sm:block">Qty</span>
                                <div className="flex items-center bg-brandBg/40 border border-borderColor/50 rounded-xl overflow-hidden focus-within:border-primaryAccent/50 transition-colors">
                                    <input
                                        value={itemCount}
                                        onChange={onChangeCount}
                                        type="number"
                                        min="1"
                                        className="w-12 h-9 text-center text-sm font-bold text-primaryText bg-transparent border-none outline-none"
                                        aria-label="Quantity"
                                    />
                                </div>
                                <button
                                    onClick={handleUpdateCart}
                                    className="h-9 px-3.5 text-[11px] uppercase tracking-wider font-bold text-primaryText bg-brandBg hover:bg-primaryText hover:text-white border border-borderColor/60 rounded-xl transition-all duration-300 cursor-pointer"
                                >
                                    Update
                                </button>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="flex items-baseline gap-1">
                                    <span className="font-sans text-lg md:text-xl font-extrabold text-primaryText tracking-tight">
                                        {item?.price || 0}
                                    </span>
                                    <span className="text-[10px] font-bold text-secondaryText uppercase tracking-widest">EGP</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default CartItem;
