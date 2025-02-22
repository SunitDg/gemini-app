import { useReducer } from "react";

function Counter() {

    const reducer = (state, action) => {
        if (action.type === 'INC') {
            state = state + 1;
        } else if (action.type === 'DCR') {
            state = state - 1;
        }
        return state;
    }
    const [count, dispatch] = useReducer(reducer, 0);
    return <>
        <span>Counter:  {count} </span> <br />
        <span onClick={() => dispatch({ type: 'INC' })}>Increment</span> <br />
        <span onClick={() => dispatch({ type: 'DCR' })}>Decrement</span>
    </>
}

export default Counter;