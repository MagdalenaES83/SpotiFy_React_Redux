import {
  ADD_SONGS_TO_LIKED_ARRAY,
  REMOVE_SONGS_FROM_LIKED_ARRAY,
} from "../actions";
import { initialState } from "../store";

export const likeReducer = (state = initialState.songs, action) => {
  switch (action.type) {
    case ADD_SONGS_TO_LIKED_ARRAY:
      return {
        ...state,
        // likedSongs: state.likedSongs.includes(action.payload)
        //   ? [...state.likedSongs]
        //   : [...state.likedSongs, action.payload],
        likedSongs: [...state.likedSongs, action.payload],
      };
    case REMOVE_SONGS_FROM_LIKED_ARRAY:
      return {
        ...state,
        likedSongs: state.likedSongs.filter(
          (song, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};
