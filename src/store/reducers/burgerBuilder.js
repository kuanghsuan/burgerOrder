import * as actionType from "../actions/actionTypes";
import { updateObject } from '../../shared/utility';
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};
const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIngred = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngreds = updateObject(state.ingredients, updatedIngred);
  const updatedSt = {
    ingredients: updatedIngreds,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
    building: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionType.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    case actionType.SET_INGREDIENTS:
      return setIngredients(state, action);

    case actionType.FETCH_INGREDIENTS_FAIL:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;