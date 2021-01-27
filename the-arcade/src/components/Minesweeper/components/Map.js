import { useEffect, useState } from "react";
import createMap from "../services/CreateMap";
import Cell from "./Cell";
import reveal from "../services/Reveal";
import Modal from "./Modal";
import Timer from "./Timer";
import titlePic from "../images/minesweeperTitle.png";
import gameOverPic from "../images/gameOverGIF.gif";
import leaderboardButton from "../images/leaderboardButton.png";
import { Link } from "react-router-dom";

function Map(props) {
  const [array, setArray] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [time, setTime] = useState(0);
  const [difficulty, setDifficulty] = useState("beginner");
  const [row, setRow] = useState(9);
  const [col, setCol] = useState(9);
  const [mines, setMines] = useState(10);
  const [nonMines, setNonMines] = useState(row * col - mines);

  const handleDifficulty = (e) => {
    e.preventDefault();
    console.log(difficulty);
    setDifficulty(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    if (difficulty === "beginner") {
      setRow(9);
      setCol(9);
      setMines(10);
    } else if (difficulty === "intermediate") {
      setRow(16);
      setCol(16);
      setMines(40);
    } else {
      setRow(16);
      setCol(30);
      setMines(99);
    }
  }, [difficulty]);

  useEffect(() => {
    resetTheGame();
  }, [row, col, mines]);

  function resetTheGame() {
    setGameOver(false);
    setArray(createMap(row, col, mines));
    setTime(0);
    setNonMines(row * col - mines);
    console.log(
      `rows: ${row}, col: ${col}, mines: ${mines}, difficulty: ${difficulty}`
    );
  }

  const handleReveal = (e, x, y) => {
    e.preventDefault();
    let editedMap = array.slice();
    if (editedMap[x][y].value === "💣") {
      editedMap.forEach((row) => {
        row.forEach((cell) => {
          editedMap[cell.x][cell.y].revealed = true;
        });
      });
      setArray(editedMap);
      setWinner(false);
      setGameOver(true);
    } else if (!editedMap[x][y].revealed) {
      let result = reveal(editedMap, x, y, nonMines);
      setArray(result.map);
      setNonMines(result.nonMineCount);
    }
  };

  useEffect(() => {
    if (nonMines === 0 && !gameOver) {
      setWinner(true);
      setGameOver(true);
    }
  }, [nonMines]);

  const handleFlag = (e, x, y) => {
    e.preventDefault();
    let editedMap = array.slice();
    editedMap[x][y].flagged = !editedMap[x][y].flagged;
    setArray(editedMap);
  };

  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  let vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  let cellSize = (0.6 * vh) / row;
  let titleWidth = "90vh";
  let linkWidth = "30vh"

  if (vw < vh) {
    cellSize = (0.6 * vw) / row;
    titleWidth = "90vw";
    linkWidth = "30vw";
  }

  let numSize = cellSize * 0.8;

  const style = {
    main: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      height: vh,
      width: vw,
    },
    title: {
      margin: "30px",
      width: titleWidth,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    analytics: {
      height: cellSize + 10,
      width: col * cellSize,
      fontSize: numSize * 0.75,
      background: "#393939",
      color: "white",
      borderRadius: "20px 20px 0 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      gridTemplateAreas: "s d t",
    },
    link: {
      margin: "30px",
      width: linkWidth,
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  useEffect(() => {
    if (!gameOver) {
      setArray(createMap(row, col, mines));
      setTime(0);
      setNonMines(row * col - mines);
    }
  }, [gameOver]);

  if (!array) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={style.main}>
      <Link to="/minesweeper">
        <img style={style.title} src={titlePic} />
      </Link>
      {gameOver ? (
        <Modal
          setGameOver={setGameOver}
          score={time}
          row={row}
          col={col}
          mines={mines}
          winner={winner}
          pic={gameOverPic}
          xCells={col}
          yCells={row}
          cellSize={cellSize}
          difficulty={difficulty}
          restart={resetTheGame}
          setToggleFetch={props.setToggleFetch}
        />
      ) : null}
      <div style={style.analytics}>
        <div style={{ gridArea: "s", width: "10vw" }}>🔍 {nonMines}</div>
        <select
          style={{
            gridArea: "d",
            height: "3vh",
            width: "10vw",
            borderRadius: "5px",
            border: "2px solid"
          }}
          value={difficulty}
          onChange={(e) => handleDifficulty(e)}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
        <Timer
          style={{ gridArea: "t", width: "10vw" }}
          time={time}
          gameOver={gameOver}
          setTime={setTime}
          numSize={numSize}
          chooseNewDifficulty={difficulty}
          winner={winner}
        />
      </div>
      {array.map((row) => {
        return (
          <div style={{ display: "flex" }}>
            {row.map((cell) => {
              return (
                <Cell
                  numSize={numSize}
                  cellSize={cellSize}
                  info={cell}
                  handleReveal={handleReveal}
                  handleFlag={handleFlag}
                />
              );
            })}
          </div>
        );
      })}
      <Link to="/leaderboard">
        <img style={style.link} src={leaderboardButton} />
      </Link>
    </div>
  );
}

export default Map;
