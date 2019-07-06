import { combineReducers } from "redux";
import { LoaderState, Dashboard } from "../../typings";
import { playlistReducer } from "./playlist";
import { loaderStateReducer } from "./loader";

export interface State {
  dashboard: Dashboard;
  loader: LoaderState;
};

export const state = combineReducers<State>({
  dashboard: playlistReducer,
  loader: loaderStateReducer,
});
