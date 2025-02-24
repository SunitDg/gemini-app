import { createStore } from "redux";
import {configureStore, createSlice} from '@reduxjs/toolkit';
const INITIAL_VALUE = {
    counter : 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_VALUE,
    reducers: {
        increment: (state,action) => {
            state.counter++;
        },
        decrement: (state,action) => {
            state.counter--;
        }
    }
})

const countStore = configureStore({
    reducer : {
        counter: counterSlice.reducer
    }
});
export const counterActions   = counterSlice.actions;
// const counterReducer = (store = INITIAL_VALUE,action) => {
//     const newStore = store;
    
//     if(action.type === 'INCR') {
//         return {counter: store.counter + 1}
//     }
//     if(action.type === 'DECR') {
//         return {counter: store.counter - 1}
//     }

//     return store;
// }
// const counterStore = createStore(counterReducer);




export default countStore;