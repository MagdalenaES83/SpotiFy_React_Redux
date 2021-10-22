export const ADD_SONGS_TO_LIKED_ARRAY = "ADD_SONGS_TO_LIKED_ARRAY";
export const REMOVE_SONGS_FROM_LIKED_ARRAY = "REMOVE_SONGS_FROM_LIKED_ARRAY";

export const addSongsToLikedAction = (songObj) => ({
  type: ADD_SONGS_TO_LIKED_ARRAY,
  payload: songObj,
});

export const removeSongsFromLikedAction = (songObj) => ({
  type: REMOVE_SONGS_FROM_LIKED_ARRAY,
  payload: songObj,
});
