import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './redux/counter';


let store = createStore(counterReducer, composeWithDevTools());


export default store;
