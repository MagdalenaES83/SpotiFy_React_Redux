import {
  ADD_SONG_TO_CURRENTLY_PLAYING,
  //   REMOVE_SONG_FROM_CURRENTLY_PLAYING,
} from "../actions";
import { initialState } from "../store";

export const playReducer = (state = initialState.currentlyPlaying, action) => {
  switch (action.type) {
    case ADD_SONG_TO_CURRENTLY_PLAYING:
      console.log(action.payload);
      return {
        selectedSong: action.payload,
        //   selectedSong: state.currentlyPlaying.selectedSong(action.payload),
      };
    // case REMOVE_SONG_FROM_CURRENTLY_PLAYING:
    //   //   console.log(action.payload);
    //   return {
    //     ...state,
    //     currentlyPlaying: {
    //       likedSongs: state.currentlyPlaying.likedSongs.filter(
    //         (song, index) => song.id !== action.payload.id
    //       ),
    //     },
    //   };
    default:
      return state;
  }
};
