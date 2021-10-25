// import SpotifyLogo from "../data/spotifiy.png";
import { IoMdHome } from "react-icons/io";
import { BsSearch, BsHeartFill } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";
// import { ImBooks } from "react-icons/im";
import { AiFillPlusSquare } from "react-icons/ai";
import { CgArrowDownO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar2 = ({ search }) => {
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const unveilSearch = () => {
    setSearchbarVisible(true);
    console.log("search unveiled");
  };

  return (
    <div className="sidebar-container" id="sidebar">
      <div className="sidebar">
        <ul className="nav flex-column navbar-dark d-flex  h-60">
          <li className="nav-item mb-4 text-white">
            <img
              className="pt-3"
              src="/logo/Spotify_Logo.png"
              height="60px"
              width="auto"
              alt=""
              srcset=""
            />
          </li>
          <Link to="/">
            <li className="nav-item text-white activehome ">
              <p>
                <IoMdHome className="react-icon" />
                Home
              </p>
            </li>
          </Link>
          {/* <li className="nav-item text-white">
            <p>
              <a href="#Details">
                <input
                  id="input"
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  onchange="searchAlbums(this.value)" // NEEDS REFACTORED
                />
                <BsSearch id="search-icon" className="react-icon" />
              </a>
            </p>
          </li> */}
          <div onClick={unveilSearch}>
            {searchbarVisible ? (
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control mb-2"
                  id="searchField"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  onChange={(event) => {
                    setSearchInput(event.currentTarget.value);
                    console.log(searchInput);
                  }}
                />
                <div
                  className="input-group-append"
                  style={{ marginBottom: "4%" }}
                >
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    type="button"
                    id="button-addon1"
                    onClick={() => search(searchInput)}
                  >
                    GO
                  </button>
                </div>
              </div>
            ) : (
              <li className="nav-item text-white">
                <p>
                  <BsSearch className="react-icon" />
                  Search
                </p>
              </li>
            )}
          </div>

          <a href="#Details">
            <li className="nav-item text-white mb-4">
              <p>
                {/* <ImBooks className="react-icon" /> */}
                <VscLibrary className="react-icon" />
                Your Library
              </p>
            </li>
          </a>
          <a href="#Details">
            <li className="nav-item text-white">
              <p>
                <AiFillPlusSquare className="react-icon" />
                Create Playlist
              </p>
            </li>
          </a>
          <a href="#Details">
            <li className="nav-item text-white mb-0">
              <p>
                <BsHeartFill className="react-icon" />
                Liked Songs
              </p>
            </li>
          </a>
        </ul>
        <div id="scrollbar-list" className="pl-4 pb-5 mb-5">
          <a className="click-me" href="#Album">
            <p>The Rise and Fall of Ziggy Stardust</p>
          </a>
          <a className="click-me " href="#Album">
            <p>My Beautiful Dark Twisted Fantasy</p>
          </a>

          <a className="click-me " href="#Album">
            <p>What Did You Expect from The Vaccines?</p>
          </a>

          <a className="click-me" href="#Album">
            <p>West Ryder Pauper Lunatic Asylum</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Illmatic</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Hozier</p>
          </a>
          <a className="click-me" href="#Album">
            <p>Palleggio</p>
          </a>
          <a className="click-me" href="#Album">
            <p>An Awesome Wave</p>
          </a>

          <a className="click-me" href="#Album">
            <p>The Eminem Show</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Funeral</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Dogrel</p>
          </a>
          <a className="click-me" href="#Album">
            <p>Good Kid, M.A.A.D City</p>
          </a>
          <a className="click-me" href="#Album">
            <p>What People Say I Am, That Is What I Am Not</p>
          </a>
          <a className="click-me" href="#Album">
            <p>Is This It?</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Nevermind</p>
          </a>

          <a className="click-me" href="#Album">
            <p>What peope say i am, a am</p>
          </a>

          <div id="install-app" className="text-white pl-4 p-1">
            <p>
              <a className="text-white" href="#Details">
                {" "}
                <CgArrowDownO className="react-icon" />
                Install App
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//Get rid of ps
//Have each link go to a different album page

export default Sidebar2;
