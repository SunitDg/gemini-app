const redux = require('redux');

const INITIAL_VALUE = {
    counter : 0
}
const reducer = (store = INITIAL_VALUE,action) => {

    if(action.type === 'INCR') {
        return {counter: store.counter + 1}
    }
    return store;
}
const store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
}

store.subscribe(subscriber);

store.dispatch({type:'INCR'});
store.dispatch({type:'INCR'});

store.dispatch({type:'INCR'});


