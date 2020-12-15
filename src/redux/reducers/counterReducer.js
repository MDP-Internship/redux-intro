/* eslint-disable no-unused-vars */
import * as actionsType from "../actions/actionsTypes"

const counterReducer = (state = 5, action) => {
    let newsState;
    switch (action.type) {
        case actionsType.INCREASE_COUNTER:
            return (newsState = state + action.payload);
        case actionsType.DECREASE_COUNTER:
            return (newsState = state - action.payload);
        case actionsType.INCREASE_BY_TWO_COUNTER:
            return (newsState = state + action.payload);
        default:
            return state;
    }

}

export default counterReducer;