import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { removeSongsFromLikedAction, addSongsToLikedAction } from "../actions";

const mapStateToProps = (state) => ({
  likedSongs: state.songs.likedSongs,
});

// const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  addSongsToLiked: (songObj) => {
    dispatch(addSongsToLikedAction(songObj));
  },
  // removeSongsFromLiked: (songObj) => {
  //   dispatch(removeSongsFromLikedAction(songObj));
  // },
});

const Song = ({ track, likedSongs, addSongsToLiked, removeSongsFromLiked }) => {
  // const isSongLiked = likedSongs.includes(track);
  // console.log(isSongLiked);

  // const toggleLiked = () => {
  //   isSongLiked ? addSongsToLiked(track) : removeSongsFromLiked(track);
  // };

  return (
    <div className="py-3 trackHover">
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {track.title}
      </span>

      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
      <AiFillHeart onClick={() => addSongsToLiked(track)} />
      {/* {isSongLiked ? (
        <AiFillHeart onClick={addSongsToLiked} />
      ) : (
        <AiOutlineHeart onClick={toggleLiked} />
      )} */}
    </div>
  );
};

// export default Song;
export default connect(mapStateToProps, mapDispatchToProps)(Song);
