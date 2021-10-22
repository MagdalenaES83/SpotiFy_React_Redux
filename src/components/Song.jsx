import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { connect } from "react-redux";
import {
  removeSongsFromLikedAction,
  addSongsToLikedAction,
  addSongToCurrentlyPlayingAction,
} from "../actions";

const mapStateToProps = (state) => ({
  likedSongs: state.songs.likedSongs,
});

// const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  addSongsToLiked: (songObj) => {
    dispatch(addSongsToLikedAction(songObj));
  },
  removeSongsFromLiked: (songObj) => {
    dispatch(removeSongsFromLikedAction(songObj));
  },
  addSongToCurrentlyPlaying: (songObj) => {
    dispatch(addSongToCurrentlyPlayingAction(songObj));
  },
});

const Song = ({
  track,
  likedSongs,
  addSongsToLiked,
  removeSongsFromLiked,
  addSongToCurrentlyPlaying,
}) => {
  const isSongLiked = likedSongs.includes(track);
  // console.log(isSongLiked);

  const toggleLiked = () => {
    isSongLiked ? removeSongsFromLiked(track) : addSongsToLiked(track);
  };

  return (
    <div className="py-3 trackHover">
      <span
        className="card-title trackHover px-3"
        style={{ color: "white" }}
        onClick={() => addSongToCurrentlyPlaying(track)}
      >
        {track.title}
      </span>
      {/* {console.log(track)} */}
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
      {/* <AiFillHeart onClick={() => addSongsToLiked(track)} /> */}
      {isSongLiked ? (
        <AiFillHeart onClick={toggleLiked} style={{ color: "white" }} />
      ) : (
        <AiOutlineHeart onClick={toggleLiked} style={{ color: "white" }} />
      )}
    </div>
  );
};

// export default Song;
export default connect(mapStateToProps, mapDispatchToProps)(Song);
