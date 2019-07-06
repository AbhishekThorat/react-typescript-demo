import { actionTypes } from "../../util/constants/actionTypes";
import { IPlaylistItem, IDashboard } from "../../typings";

const dashboardInitialState = {
    playlistItems :[],
    errorWhileFetchingPlaylist: false
};

export const playlistReducer = (state: IDashboard = dashboardInitialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PLAYLIST_COMPLETED:
            return handleFetchMembersCompleted(state, action.payload);
        case actionTypes.UNABLE_TO_FETCH_PLAYLIST:
            return handleFetchMembersCompleted(state, action.payload);
    }
    return state;
};

const handleFetchMembersCompleted = (state: IDashboard, payload: IDashboard) => {
    return payload;
};
