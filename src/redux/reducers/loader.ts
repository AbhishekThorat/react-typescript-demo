import { actionTypes } from "../../util/constants/actionTypes";
import { ILoaderState } from "../../typings";

export const loaderStateReducer = (state: ILoaderState = {isActive: false}, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_LOADER_STATE:
            return handleUpdateLoaderState(state, action.payload);
    }
    return state;
};

const handleUpdateLoaderState = (state: ILoaderState, payload: ILoaderState) => {
    return payload;
};
