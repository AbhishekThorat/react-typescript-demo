import { actionTypes } from "../../util/constants/actionTypes";

export const updateLoaderState = (updatedState: boolean) => (dispatch) => {
  dispatch({
    type: actionTypes.UPDATE_LOADER_STATE,
    payload: updatedState,
  })
};
