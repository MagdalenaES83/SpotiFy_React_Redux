export const ADD_SONGS_TO_LIKED_ARRAY = "ADD_SONGS_TO_LIKED_ARRAY";
export const REMOVE_SONGS_FROM_LIKED_ARRAY = "REMOVE_SONGS_FROM_LIKED_ARRAY";
export const ADD_SONG_TO_CURRENTLY_PLAYING = "ADD_SONG_TO_CURRENTLY_PLAYING";
export const REMOVE_SONG_FROM_CURRENTLY_PLAYING =
  "REMOVE_SONG_FROM_CURRENTLY_PLAYING";

export const addSongsToLikedAction = (songObj) => ({
  type: ADD_SONGS_TO_LIKED_ARRAY,
  payload: songObj,
});

export const removeSongsFromLikedAction = (index) => ({
  type: REMOVE_SONGS_FROM_LIKED_ARRAY,
  payload: index,
});

export const addSongToCurrentlyPlayingAction = (songObj) => ({
  type: ADD_SONG_TO_CURRENTLY_PLAYING,
  payload: songObj,
});

export const removeSongFromCurrentlyPlayingAction = (index) => ({
  type: REMOVE_SONG_FROM_CURRENTLY_PLAYING,
  payload: index,
});
