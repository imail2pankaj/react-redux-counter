
import { INCREMENT, DECREMENT } from '../constants/index';

export const increaseCounter = (increaseBy = 0) => {
    return {
        type: INCREMENT,
        increaseBy: increaseBy
    }
}

export const decreaseCounter = (decreaseBy = 0) => {
    return {
        type: DECREMENT,
        decreaseBy: decreaseBy
    }
}