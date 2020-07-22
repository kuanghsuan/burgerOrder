import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInite = (state, action) => {
  return updateObject(state, {
    purchased: false,
  });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const purchaseBurgerSucess = (state, action) => {
  const neworder = updateObject(action.orderdata, {
    id: action.orderId,
  });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(neworder),
  });
};

const purchaseBurgerFails = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const fetchOrderStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchOrderSucess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });
};

const fetchOrderFail = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASES_INIT:
      return purchaseInite(state, action);

    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);

    case actionTypes.PURCHASE_BURGER_SUCESS:
      return purchaseBurgerSucess(state, action);

    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFails(state, action);

    case actionTypes.FETCH_ORDER_START:
      return fetchOrderStart(state, action);

    case actionTypes.FETCH_ORDER_SUCCESS:
      return fetchOrderSucess(state, action);

    case actionTypes.FETCH_ORDER_FAIL:
      return fetchOrderFail(state, action);

    default:
      return state;
  }
};

export default reducer;
