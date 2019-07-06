import {actionTypes} from "../../util/constants/actionTypes";
import { IDashboard } from "../../typings";
import { updateLoaderState } from  "./loader";
import { api } from '../../util/';

export const fetchPlaylist = () => (dispatch) => {
    dispatch(updateLoaderState(true));
    fetch(`${api.BASE_PATH}/${api.GET_PLAYLIST_API_KEY}`, {method: 'GET'})
      .then((res: any) => res.json())
      .then((list: Array<any>) => {
          dispatch(updateLoaderState(false));
          dispatch(fetchPlaylistCompleted({playlistItems: list, errorWhileFetchingPlaylist: false}));
      })
      .catch((err: any) => {
          dispatch(updateLoaderState(false));
          dispatch(fetchPlaylistCompleted({playlistItems: [], errorWhileFetchingPlaylist: true}));
          console.error('...error...', err);
      })
};

const fetchPlaylistCompleted = (dashboardData: IDashboard) => ({
    type: actionTypes.FETCH_PLAYLIST_COMPLETED,
    payload: dashboardData
});
