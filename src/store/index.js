import { createStore } from "redux";
import { likeReducer } from "../reducers/likeReducer";

export const initialState = {
  songs: {
    likedSongs: [],
  },
  currentlyPlaying: {
    selectedSong: [],
  },
};

const configureStore = createStore(
  likeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
