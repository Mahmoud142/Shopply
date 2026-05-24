import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishList } from "./../../redux/actions/wishlistAction";

const CardContainerHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [favProd, setFavProd] = useState([]);

    const res = useSelector((state) => state.addToWishListReducer.allWishList);

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getUserWishList());
            setLoading(false);
        };

        get();
    }, [dispatch]);

    useEffect(() => {
        if (loading === false) {
            if (res?.length >= 1) {
                setFavProd(res.map((item) => item?._id));
            } else setFavProd([]);
        }
    }, [loading, res]);

    return [favProd];
};

export default CardContainerHook;
