import Map from "./components/Map.js";
import Leaderboard from "./components/Leaderboard.js";
import titlePic from "./images/minesweeperTitle.png";
import startButton from "./images/startButton.png";
import leaderboardButton from "./images/leaderboardButton.png";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";

// Original Minesweeper Difficulty Levels
// Beginner: 9x9 w/ 10 mines
// Intermediate: 16x16 w/ 40 mines
// Expert: 16x30 w/ 99 mines

function App() {
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
      width: "100vw"
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
    }
  }

  return (
    <div className="MineApp">
      <Route exact path="/minesweeper">
        <div style={style.page}>
          <img style={style.title} src={titlePic} />
          <Link to="/minesweeper_game">
            <img style={style.start} src={startButton}/>
          </Link>
          <Link to="/leaderboard">
            <img style={style.leaderboard} src={leaderboardButton}/>
          </Link>
        </div>
      </Route>
      <Route path="/minesweeper_game">
        <Map
          setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/leaderboard">
        <Leaderboard
          entries={entries}
        />
      </Route>
    </div>
  );
}

export default App;

// TO MAKE MODAL WORK CORRECTLY
// for the three states of gameplay
// 1. regular
// 2. gameover
// 3. winningForm
// set them as a boolean where the three states are
// 1. null
// 2. false
// 3. true
