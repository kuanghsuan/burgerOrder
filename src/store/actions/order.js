import * as actiontypes from "./actionTypes";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actiontypes.PURCHASE_BURGER_SUCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actiontypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actiontypes.PURCHASE_BURGER_START,
  };
};

export const purchaseBurger = (orderData, token) => {
  return {
    type: actiontypes.PURCHASE_BURGER,
    orderData: orderData,
    token: token
  };
};

export const purchaseInit = () => {
  return {
    type: actiontypes.PURCHASES_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actiontypes.FETCH_ORDER_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actiontypes.FETCH_ORDER_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actiontypes.FETCH_ORDER_START,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: actiontypes.FETCH_ORDER,
    token: token,
    userId: userId,
  };
};
