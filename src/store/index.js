import { createStore, combineReducers } from "redux";
import { likeReducer } from "../reducers/likeReducer";
import { playReducer } from "../reducers/playReducer";

export const initialState = {
  songs: {
    likedSongs: [],
  },
  currentlyPlaying: {
    selectedSong: {},
  },
};

const bigReducer = combineReducers({
  songs: likeReducer,
  currentlyPlaying: playReducer,
});

const configureStore = createStore(
  bigReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
