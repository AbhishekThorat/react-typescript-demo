import {actionTypes} from "../../util/constants/actionTypes";

export const updateLoaderStateAction = (updatedState: boolean) => (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_LOADER_STATE,
    payload: updatedState,
  })
};
