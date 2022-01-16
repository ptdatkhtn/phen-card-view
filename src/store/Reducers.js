import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
    switch (action.type) {
        case ACTIONS.CMTSDATA:
            return {
                ...state,
                cmtsData: action.payload
            }
        default:
            return state
        }
}

export default reducers