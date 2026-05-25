import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addProductToWishList,
    removeProductFromWishList,
} from "./../../redux/actions/wishlistAction";
import notify from "./../../hook/useNotifaction";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";

const ProductCardHook = (item, favProd = []) => {
    const dispatch = useDispatch();
    const [favImg, setFavImg] = useState(favoff);
    let Fav = favProd.some((fitem) => fitem === item._id);

    const [loadingAdd, setLoadingAdd] = useState(true);
    const [loadingRemove, setLoadingRemove] = useState(true);
    const [isFav, setIsFav] = useState(Fav);

    useEffect(() => {
        setIsFav(Fav);
    }, [Fav]);

    const handelFav = () => {
        if (isFav) {
            removeToWishListData();
        } else {
            addToWishListData();
        }
    };

    useEffect(() => {
        if (isFav === true) {
            setFavImg(favon);
        } else {
            setFavImg(favoff);
        }
    }, [isFav]);

    const resAdd = useSelector(
        (state) => state.addToWishListReducer.addWishList,
    );
    const resRemove = useSelector(
        (state) => state.addToWishListReducer.removeWishList,
    );

    const addToWishListData = async () => {
        setIsFav(true);
        setFavImg(favon);
        setLoadingAdd(true);
        await dispatch(
            addProductToWishList({
                productId: item._id,
            }),
        );
        setLoadingAdd(false);
    };

    const removeToWishListData = async () => {
        setIsFav(false);
        setFavImg(favoff);
        setLoadingRemove(true);
        await dispatch(removeProductFromWishList(item._id));
        setLoadingRemove(false);
    };

    useEffect(() => {
        if (loadingAdd === false) {
            if (resAdd && resAdd.status === 200) {
                notify("Product added to wishlist successfully", "success");
            } else if (resAdd && resAdd.status === 401) {
                notify("You are not logged in", "error");
            }
        }
    }, [loadingAdd, resAdd]);

    useEffect(() => {
        if (loadingRemove === false) {
            if (resRemove && (resRemove.status === "success" || resRemove.success === "SUCCESS" || resRemove.success === "success")) {
                notify("Product removed from wishlist successfully", "warn");
            } else if (resRemove && (resRemove.status === 401 || resRemove.message === "You are not logged in. Please login to get access")) {
                notify("You are not logged in", "error");
            }
        }
    }, [loadingRemove, resRemove]);

    return [removeToWishListData, addToWishListData, handelFav, favImg, isFav];
};
export default ProductCardHook;
