import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CardProductsContainer from "../Products/CardProductContainer";
import { getUserWishList } from "../../redux/actions/wishlistAction";

const UserFavoriteProduct = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getUserWishList());
            setLoading(false);
        };
        get();
    }, [dispatch]);

    const res = useSelector((state) => state.addToWishListReducer?.allWishList);

    useEffect(() => {
        if (loading === false) {
            if (res) setItems(res);
        }
    }, [loading, res]);
    return (
        <div>
            <div className="admin-content-text pb-4">Wishlist</div>
            <Row className="justify-content-start">
                {items?.length <= 0 ? (
                    <h6>No favorite products yet</h6>
                ) : (
                    <CardProductsContainer
                        products={res}
                        title=""
                        btntitle=""
                    />
                )}
            </Row>
        </div>
    );
};

export default UserFavoriteProduct;
