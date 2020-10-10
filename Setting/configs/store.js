import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create rootReducer
export const rootReducer = combineReducers({

});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

