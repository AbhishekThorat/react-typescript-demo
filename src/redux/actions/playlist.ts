import {actionTypes} from "../../util/constants/actionTypes";
import { IDashboard } from "../../typings";
import { updateLoaderStateAction } from  "./loader";

const API_BASE_PATH = "http://localhost:8081";
const GET_PLAYLIST_API_KEY = "playlist";

export const fetchPlaylistAction = () => (dispatch) => {
    dispatch(updateLoaderStateAction(true));
    fetch(`${API_BASE_PATH}/${GET_PLAYLIST_API_KEY}`, {method: 'GET'})
      .then((res: any) => {
          return res.json()
      })
      .then((list: Array<any>) => {
          dispatch(updateLoaderStateAction(false));
          dispatch(fetchPlaylistCompleted({playlistItems: list, errorWhileFetchingPlaylist: false}));
      })
      .catch((err: any) => {
          dispatch(updateLoaderStateAction(false));
          dispatch(fetchPlaylistCompleted({playlistItems: [], errorWhileFetchingPlaylist: true}));
          console.error('...error...', err);
      })
};

const fetchPlaylistCompleted = (dashboardData: IDashboard) => ({
    type: actionTypes.FETCH_PLAYLIST_COMPLETED,
    payload: dashboardData
});
