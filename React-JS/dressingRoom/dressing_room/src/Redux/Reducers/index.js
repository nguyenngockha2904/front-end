import { combineReducers } from 'redux';
import ProductReducer from './product';
import CategoryReducer from './categories';
import filterProductsReducer from './FilterProduct';
import ModelReducer from './modelReducer';


const RootReducer = combineReducers({
    products: ProductReducer,
    categories: CategoryReducer,
    filterProducts: filterProductsReducer,
    model: ModelReducer,
});

export default RootReducer;