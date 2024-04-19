import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './buttonSlice';
import inputReducer from './inputSlice';

const store = configureStore({
    reducer: {
        counterSlice: counterReducer, // const [counterSlice, setCounterSlice]
        inputSlice: inputReducer
    }
})


export default store;
