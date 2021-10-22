import { Row, Col, Container } from "react-bootstrap";
import {
  AiOutlineHeart,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillPlayCircle,
} from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { FiRepeat } from "react-icons/fi";
import { BsMusicNoteList, BsFillMusicPlayerFill } from "react-icons/bs";
import { HiVolumeUp } from "react-icons/hi";

// import { connect } from "react-redux";

// const mapStateToProps = (state) => ({
//   currentlyPlaying: state.currentlyPlaying.selectedSong,
// });

const Player2 = ({ currentlyPlaying }) => {
  const handlePlay = () => {
    console.log("Play");
    let audio = document.getElementById("audioFile");
    audio.play();
  };

  return (
    <Container fluid id="playbar">
      <Row>
        <Col className="col-3 leftFooter d-none d-sm-none d-md-flex">
          <img
            src={currentlyPlaying.artist && currentlyPlaying.md5_image}
            alt=""
          />

          <div className="ml-2 mt-1">
            <p className="card-text my-1 ml-2 line-clamp" id="footer-song">
              {currentlyPlaying.title}
            </p>
            <p className="card-text my-1 ml-2" id="footer-artist">
              {currentlyPlaying.artist && currentlyPlaying.artist.name}
            </p>
          </div>
          <span>
            <a href="#footer" className="footer-icon">
              <AiOutlineHeart />
            </a>
          </span>
        </Col>

        <Col className="col-6 middleFooter mb-2">
          <div>
            <div className="row col-12 mt-2 d-flex">
              <a href="#footer" className="footer-icon">
                <BiShuffle />
              </a>

              <a href="#footer" className="footer-icon">
                <AiFillCaretLeft />
              </a>

              {/* <a href="#footer" className="footer-icon footer-icon-play" > */}
              <AiFillPlayCircle
                className="footer-icon footer-icon-play"
                onClick={handlePlay}
              />
              {/* </a> */}

              <a href="#footer" className="footer-icon">
                <AiFillCaretRight />
              </a>

              <a href="#footer" className="footer-icon">
                <FiRepeat />
              </a>
            </div>
            <div className=" row col-12 d-flex">
              <p className="mx-2 my-2 song-minute-duration">1:32</p>
              <progress
                className="mx-2 my-2"
                id="file"
                max="100"
                value="0"
                fill="white"
              ></progress>
              <audio id="audioFile" src={currentlyPlaying.preview}></audio>
              <p className="mx-2 my-2  song-minute-duration">2:34</p>
            </div>
          </div>
        </Col>

        <Col className="col-3 rightFooter mt-4 d-none d-sm-none d-md-flex">
          <a href="#footer" className="footer-icon">
            <BsMusicNoteList />
          </a>

          <a href="#footer" className="footer-icon">
            <BsFillMusicPlayerFill />
          </a>
          <div href="#footer" className="footer-icon">
            <HiVolumeUp />
          </div>

          <div>
            <input id="volume-bar" type="range" value="100" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// export default connect(mapStateToProps)(Player2);
export default Player2;
