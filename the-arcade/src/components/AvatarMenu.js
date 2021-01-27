import { Link, Route } from "react-router-dom";
import { useState } from "react";
import Avatar from "./Avatar.js";
import pinkAvatar from "../images/pinkAvatar.png";
import redAvatar from "../images/redAvatar.png";
import grayscaleAvatar from "../images/grayscaleAvatar.png";
import goldAvatar from "../images/goldAvatar.png";
import blueAvatar from "../images/blueAvatar.png";
import purpleAvatar from "../images/purpleAvatar.png";
import greenAvatar from "../images/greenAvatar.png";
import orangeAvatar from "../images/orangeAvatar.png";

function AvatarMenu(props) {
  const [dir, setDir] = useState("down");

  function switchDir() {
    if (dir === "down") {
      setDir("left");
    } else if (dir === "left") {
      setDir("up");
    } else if (dir === "up") {
      setDir("right");
    } else {
      setDir("down");
    }
  }
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        background: "black",
      }}
      onClick={switchDir}
    >
      <div
        style={{
          color: "white",
          fontSize: "5vh",
          margin: "3vh",
        }}
      >
        Select your Avatar:
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "row wrap",
        }}
      >
        <Link to="/explorer">
          <div class="chooseAvatar">
            <Avatar avatar={pinkAvatar} setAvatar={props.setAvatar} dir={dir}/>
          </div>
        </Link>
        <Link to="/explorer">
          <div class="chooseAvatar">
            <Avatar avatar={redAvatar} setAvatar={props.setAvatar} dir={dir}/>
          </div>
        </Link>
        <Link to="/explorer">
          <div class="chooseAvatar">
            <Avatar avatar={orangeAvatar} setAvatar={props.setAvatar} dir={dir}/>
          </div>
        </Link>
        <Link to="/explorer">
          <div class="chooseAvatar">
            <Avatar avatar={goldAvatar} setAvatar={props.setAvatar} dir={dir}/>
          </div>
        </Link>
        <Link to="/explorer">
          <div class="chooseAvatar">
            <Avatar avatar={greenAvatar} setAvatar={props.setAvatar} dir={dir}/>
          </div>
        </Link>
        <Link to="/explorer">
          <div class="chooseAvatar">
            <Avatar avatar={blueAvatar} setAvatar={props.setAvatar} dir={dir}/>
          </div>
        </Link>
        <Link to="/explorer">
          <div class="chooseAvatar">
            <Avatar avatar={purpleAvatar} setAvatar={props.setAvatar} dir={dir}/>
          </div>
        </Link>
        <Link to="/explorer">
          <div class="chooseAvatar">
            <Avatar avatar={grayscaleAvatar} setAvatar={props.setAvatar} dir={dir}/>
          </div>
        </Link>
      </div>
      <Link to="/">
        <div style={{ color: "white" }}>Back to Main</div>
      </Link>
    </div>
  );
}

export default AvatarMenu;
