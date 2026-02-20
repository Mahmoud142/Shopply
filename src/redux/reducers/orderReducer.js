import {
    GET_ALL_ORDER,
    GET_ONE_ORDER,
} from "../type";

const intial = {
    getAllOrders: [],
    getOneOrder: [],
    changePay: [],
    changeDeliver: [],
};
const orderReducer = (state = intial, action) => {
    switch (action.type) {
        case GET_ALL_ORDER:
            return {
                ...state,
                getAllOrders: action.payload,
            };
        case GET_ONE_ORDER:
            return {
                ...state,
                getOneOrder: action.payload,
            };
        default:
            return state;
    }
};
export default orderReducer;
