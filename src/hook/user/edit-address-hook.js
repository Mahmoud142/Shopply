import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getOneUserAddress,
    editUserAddress,
} from "./../../redux/actions/userAddressesAction";
import { useNavigate } from "react-router-dom";
import notify from "../useNotifaction";

const EditAddressHook = (id) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [loadingEdit, setLoadingEdit] = useState(true);
    const [alias, setAlias] = useState("");
    const [details, setDetails] = useState("");
    const [phone, setPhone] = useState("");

    const onChangeAlias = (event) => {
        event.persist();
        setAlias(event.target.value);
    };

    const onChangeDetails = (event) => {
        event.persist();
        setDetails(event.target.value);
    };

    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value);
    };

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            await dispatch(getOneUserAddress(id));
            setLoading(false);
        };
        get();
    }, [dispatch, id]);

    const resAddress = useSelector(
        (state) => state.userAddressesReducer.oneAddress,
    );
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAlias(resAddress.data.alias);
                setDetails(resAddress.data.details);
                setPhone(resAddress.data.phone);
            }
        }
    }, [loading, resAddress]);

    const handleEdit = async () => {
        setLoadingEdit(true);
        await dispatch(
            editUserAddress(id, {
                alias,
                details: details,
                phone,
            }),
        );
        setLoadingEdit(false);
    };
    const resEdit = useSelector(
        (state) => state.userAddressesReducer.editAddress,
    );
    useEffect(() => {
        if (loadingEdit === false) {
            if (resEdit && resEdit.status === 200) {
                notify("Updated successfully", "success");
                setTimeout(() => {
                    navigate("/user/addresses");
                }, 1000);
            } else {
                notify("Failed to update", "error");
            }
        }
    }, [loadingEdit, resEdit, navigate]);

    return [
        handleEdit,
        alias,
        details,
        phone,
        onChangeAlias,
        onChangeDetails,
        onChangePhone,
    ];
};

export default EditAddressHook;
