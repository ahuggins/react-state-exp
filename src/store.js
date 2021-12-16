import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/counter'



let store = configureStore({
    devTools: true,
    reducer: {
        counter: counterReducer,
    }
})



export default store;
