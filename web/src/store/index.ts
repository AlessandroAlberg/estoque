import { createStore } from 'redux';
const INITIAL_STATE = {
    id: '',
    name: '',
    amount: '',
    value: ''
}
//@ts-ignore
function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'TOGGLE_PRODUCT') {
        return {
            id: action.product.id,
            name: action.product.name,
            amount: action.product.amount,
            value: action.product.value
        };
    }
    return state;
}

const store = createStore(reducer);
export default store;