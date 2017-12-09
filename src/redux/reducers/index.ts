import { combineReducers } from "redux";
import { LoaderState, HomePage } from "../../typings";
import { homePageReducer } from "./homepage";
import { loaderStateReducer } from "./loaderState";

export interface State {
  homePage: HomePage;
  loaderState: LoaderState;
};

export const state = combineReducers<State>({
  homePage: homePageReducer,
  loaderState: loaderStateReducer,
});
