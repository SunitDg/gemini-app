import { useDispatch } from "react-redux";
import { counterActions } from "../store";

function Controls() {

    const dispatch = useDispatch();
    
    return <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" onClick={() => dispatch(counterActions.increment())} className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
        <button type="button" onClick={() => dispatch(counterActions.decrement())} className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
    </div>
}

export default Controls;