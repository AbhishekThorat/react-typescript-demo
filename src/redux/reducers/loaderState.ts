import { actionTypes } from "../../util/constants/actionTypes";
import { LoaderState } from "../../typings";

export const loaderStateReducer = (state: LoaderState = {isActive: false}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_LOADER_STATE:
            return handleUpdateLoaderState(state, action.payload);
    }
    return state;
};

const handleUpdateLoaderState = (state: LoaderState, payload: LoaderState) => {
    return payload;
};
