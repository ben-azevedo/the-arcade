import { Link } from "react-router-dom";
import leaderPic from "../images/leaderboardTitle.png";
import backToGamePic from "../images/backButton.png";

function Leaderboard(props) {
  const { entries } = props;

  let finalTen = mergeSort(entries.slice());

  function mergeSort(arr) {
    return sort(arr);
  }

  function merge(arr1, arr2) {
    let results = [];
    while (arr1.length !== 0 && arr2.length !== 0) {
      if (arr1[0].score > arr2[0].score) {
        results.push(arr1[0]);
        arr1.shift();
      } else {
        results.push(arr2[0]);
        arr2.shift();
      }
    }
    if (arr1.length === 0) {
      results = [...results, ...arr2];
    } else {
      results = [...results, ...arr1];
    }
    return results;
  }

  function sort(arr) {
    // base case
    if (arr.length <= 1) {
      return arr;
    }
    let m = Math.floor(arr.length / 2);
    // left recursion
    let l = sort(arr.slice(0, m));
    // right recursion
    let r = sort(arr.slice(m));
    // put em back together
    return merge(l, r);
  }

  if (entries.length >= 10) {
    finalTen = finalTen.slice(0, 10);
  }

  let vw = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  let vh = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  let sizing = vh > vw ? "3vh" : "3vw";
  let label = vh > vw ? "5vh" : "5vw";

  let titleWidth = "80vh";
  let linkWidth = "30vh";

  if (vw < vh) {
    titleWidth = "80vw";
    linkWidth = "30vw";
  }

  const style = {
    leader: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    main: {
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      fontSize: sizing,
    },
    button: {
      color: "white",
    },
    title: {
      width: titleWidth,
      padding: "4vh",
    },
    backToGame: {
      marginTop: "5vh",
      width: linkWidth,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  function suffix(num) {
    if (num % 10 === 1) {
      return "st";
    } else if (num % 10 === 2) {
      return "nd";
    } else if (num % 10 === 3) {
      return "rd";
    } else {
      return "th";
    }
  }

  return (
    <div style={style.main}>
      <Link to="/minesweeper">
        <img style={style.title} src={leaderPic} />
      </Link>
      <div style={style.leader}>
        <div
          class="glowTitles"
          style={{
            display: "flex",
            flexDirection: "row",
            fontStyle: "bold",
            fontSize: label,
          }}
        >
          <div style={{ width: "10vw" }}>RANK</div>
          <div style={{ width: "35vw" }}>NAME</div>
          <div style={{ width: "10vw" }}>SCORE</div>
        </div>
        {finalTen.map((item, key) => (
          <div
            class={`glow${key + 1}`}
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ width: "10vw" }}>
              {key + 1}
              {suffix(key + 1)}
            </div>
            <div style={{ width: "35vw" }}>{item.name}</div>
            <div style={{ width: "10vw" }}>{item.score}</div>
          </div>
        ))}
      </div>
      <Link to="/minesweeper_game">
        <img style={style.backToGame} src={backToGamePic} />
      </Link>
    </div>
  );
}

export default Leaderboard;
