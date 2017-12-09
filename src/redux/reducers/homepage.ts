import { actionTypes } from "../../util/constants/actionTypes";
import { PlaylistItem, HomePage as HomePageTyping } from "../../typings";

const homePageInitialState = {
    playlistItems :[],
    errorWhileFetchingPlaylist: false
};

export const homePageReducer = (state: HomePageTyping = homePageInitialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PLAYLIST_COMPLETED:
            return handleFetchMembersCompleted(state, action.payload);
        case actionTypes.UNABLE_TO_FETCH_PLAYLIST:
            return handleFetchMembersCompleted(state, action.payload);
    }
    return state;
};

const handleFetchMembersCompleted = (state: HomePageTyping, payload: HomePageTyping) => {
    return payload;
};
