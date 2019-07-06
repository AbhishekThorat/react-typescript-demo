import { combineReducers } from "redux";
import { ILoaderState, IDashboard } from "../../typings";
import { playlistReducer } from "./playlist";
import { loaderStateReducer } from "./loader";

export interface IState {
  dashboard: IDashboard;
  loader: ILoaderState;
};

export const state = combineReducers<IState>({
  dashboard: playlistReducer,
  loader: loaderStateReducer,
});
