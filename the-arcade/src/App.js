import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseURL, config } from "./components/Minesweeper/services";
import axios from "axios";

import Home from "./components/Home.js";
import AvatarMenu from "./components/AvatarMenu.js";
import Explorer from "./components/Explorer.js";

import Map from "./components/Minesweeper/components/Map.js";
import Leaderboard from "./components/Minesweeper/components/Leaderboard.js";

import titlePic from "./components/Minesweeper/images/minesweeperTitle.png";
import startButton from "./components/Minesweeper/images/startButton.png";
import leaderboardButton from "./components/Minesweeper/images/leaderboardButton.png";

import "./App.css";

function App() {
  const [avatar, setAvatar] = useState("grayscaleAvatar.png");
  console.log(avatar);

  const [entries, setEntries] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  function score(time, difficulty) {
    return Math.ceil(difficulty * (1000 - time));
  }

  useEffect(() => {
    const apiCall = async () => {
      const resp = await axios.get(baseURL, config);
      let leaders = [];
      resp.data.records.forEach((entry) => {
        let newEntry = {
          name: entry.fields.name,
          time: entry.fields.time,
          difficulty: entry.fields.difficulty,
          score: score(entry.fields.time, entry.fields.difficulty),
        };
        leaders.push(newEntry);
      });
      setEntries(leaders);
    };
    apiCall();
  }, [toggleFetch]);

  const style = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
    },
    title: {
      width: "90vw",
    },
    start: {
      marginTop: "10vh",
      width: "25vw",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    leaderboard: {
      marginTop: "5vh",
      width: "25vw",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/avatar_menu">
        <AvatarMenu setAvatar={setAvatar} />
      </Route>
      <Route path="/explorer">
        <Explorer avatar={avatar} />
      </Route>
      <div className="MineApp">
        <Route exact path="/minesweeper">
          <div style={style.page}>
            <img style={style.title} src={titlePic} />
            <Link to="/minesweeper_game">
              <img style={style.start} src={startButton} />
            </Link>
            <Link to="/leaderboard">
              <img style={style.leaderboard} src={leaderboardButton} />
            </Link>
          </div>
        </Route>
        <Route path="/minesweeper_game">
          <Map setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard entries={entries} />
        </Route>
      </div>
    </div>
  );
}

export default App;
