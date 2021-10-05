import { GET_LOADING_STATUS } from "../actions/actionType";

const initialState = {
    loading: null,
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOADING_STATUS:
            return {
                ...state,
                loadingPorcent: action.payload,
            };

        default:
            return state;
    }
};

export default loadingReducer;
