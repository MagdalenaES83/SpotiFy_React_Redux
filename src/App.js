import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Player2 from "./components/Player2";
import Sidebar2 from "./components/Sidebar2";
import Home from "./components/Home";
import { Row } from "react-bootstrap";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  currentlyPlaying: state.currentlyPlaying.selectedSong,
});

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
});

class App extends React.Component {
  state = {
    searchResults: [],
  };

  search = async (string) => {
    if (string.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            string,
          {
            method: "GET",
            headers,
          }
        );

        let result = await response.json();
        let songs = result.data;

        this.setState({
          searchResults: songs,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Row>
            {/* <Sidebar search={this.search} /> */}
            <Sidebar2 />
            <Route
              path="/"
              exact
              render={() => <Home searchResults={this.state.searchResults} />}
            />
            <Route path="/artist/:id" component={Artist} />
            <Route path="/album/:id" component={Album} />
          </Row>
        </div>
        {this.props.currentlyPlaying !== undefined ? (
          <Player2 currentlyPlaying={this.props.currentlyPlaying} />
        ) : (
          ""
        )}
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
