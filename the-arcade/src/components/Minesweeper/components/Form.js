import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";
import winnerGIF from "../images/classicRainbow.gif";

function Form(props) {
  const [name, setName] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // make a creature object
    // give this new object the correct properties
    const newPost = {
      name,
      time: props.score,
      difficulty: props.mines * props.col * props.row,
    };
    // axios call to POST the new creature
    await axios.post(baseURL, { fields: newPost }, config);
    // toggling our GET request
    console.log("success!");
    props.setToggleFetch((prev) => !prev);
    history.push("/leaderboard");
  };

  const style = {
    form: {
      height: "30vh",
      width: "50vw",
      background: winnerGIF,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px",
    },
    entry: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }
  };

  const difficulty =
    props.difficulty[0].toUpperCase() + props.difficulty.slice(1);

  return (
    <form style={style.form} onSubmit={handleSubmit}>
      <h1 class="message" style={{ fontSize: "5vh" }}>
        You are a Minesweeper Champion! Based on your {props.score}s time in {" "}
        {difficulty}-Mode, your score is {Math.ceil(props.mines * props.col * props.row * (1000 - props.score))}
      </h1>
      <div style={style.entry}>
        <label class="message" style={{ fontSize: "3vh" }} htmlFor="name">
          Enter your name:  
        </label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Form;
