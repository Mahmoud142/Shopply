import {
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    CREATE_PRODUCT,
    GET_PRODUCT_LIKE,
    GET_PRODUCT_DETAILS,
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_SEARCH,
    GET_ALL_PRODUCTS_BY_CATEGORY,
    GET_ALL_PRODUCTS_BY_BRAND,
    GET_ERROR,
} from "../type";

const initialState = {
    products: [],
    allProducts: [],
    allHomeProducts: [],
    allProductsSearch: [],
    oneProduct: [],
    productLike: [],
    deleteProduct: [],
    updateProduct: [],
    allProductCat: [],
    allProductBrand: [],
    loading: true,
    error: {},
};
const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allHomeProducts: action.payload,
                allProducts: action.payload,
                loading: false,
            };
        case GET_ALL_PRODUCTS_SEARCH:
            return {
                ...state,
                allProductsSearch: action.payload,
                allProducts: action.payload,
                loading: false,
            };
        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                oneProduct: action.payload,
                loading: false,
            };
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                loading: false,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload,
                loading: false,
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: action.payload,
                loading: false,
            };
        case GET_ALL_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                allProductCat: action.payload,
                loading: false,
            };
        case GET_ALL_PRODUCTS_BY_BRAND:
            return {
                ...state,
                allProductBrand: action.payload,
                loading: false,
            };
        case GET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default productsReducer;
