import { actionTypes } from "../../util/constants/actionTypes";
import { PlaylistItem, Dashboard as DashboardTyping } from "../../typings";

const dashboardInitialState = {
    playlistItems :[],
    errorWhileFetchingPlaylist: false
};

export const playlistReducer = (state: DashboardTyping = dashboardInitialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PLAYLIST_COMPLETED:
            return handleFetchMembersCompleted(state, action.payload);
        case actionTypes.UNABLE_TO_FETCH_PLAYLIST:
            return handleFetchMembersCompleted(state, action.payload);
    }
    return state;
};

const handleFetchMembersCompleted = (state: DashboardTyping, payload: DashboardTyping) => {
    return payload;
};
