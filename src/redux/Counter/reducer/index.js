import { INCREMENT, DECREMENT } from '../constants/index';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.increaseBy
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - action.decreaseBy
            }
        default:
            return state
    }
}

export default counterReducer;