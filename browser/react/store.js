import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
})
, composeEnhancers(
    applyMiddleware(logger, thunkMiddleware )
  ));
export default store;



