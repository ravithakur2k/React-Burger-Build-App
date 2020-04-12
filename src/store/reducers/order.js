import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false })
}

const purchaseSuccess = (state, action) => {
    const newOrder = {
        ...action.order,
        id: action.orderId
    }
    return updateObject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
    })
}

const purchaseOrderFail = (state, action) => {
    return updateObject(state, { loading: false })
}

const purchaseOrderStart = (state, action) => {
    return updateObject(state, { loading: true })
}

const fetchOrderSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseSuccess(state, action)
        case actionTypes.PURCHASE_BURGER_FAIL:
        case actionTypes.FETCH_ORDERS_FAIL:
            return purchaseOrderFail(state, action);
        case actionTypes.PURCHASE_BURGER_START:
        case actionTypes.FETCH_ORDERS_START:
            return purchaseOrderStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrderSuccess(state, action)
        default:
            return state
    }
}

export default reducer;