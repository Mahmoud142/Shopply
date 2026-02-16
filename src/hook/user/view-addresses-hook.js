import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAddress } from "../../redux/actions/userAddressesAction";

const ViewAddressesHook = () => {
    const dispatch = useDispatch();
    const [, setLoading] = useState(true);
    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getAllUserAddress());
            setLoading(false);
        };
        get();
    }, [dispatch]);

    const res = useSelector((state) => state.userAddressesReducer.allAddresses);

    return [res];
};

export default ViewAddressesHook;
