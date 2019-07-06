import { Store, createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, IState } from './redux/reducers';

export const store: Store<IState> = createStore(
  state,
  compose(
    applyMiddleware(reduxThunk),
  )
);
