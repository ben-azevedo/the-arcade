import shadow from "../images/shadow.png";
import "./Avatar.css";
import { useState, useEffect} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function Avatar(props) {
  const handleCharacterChoice = () => {
    props.setAvatar(props.avatar);
  }

  return (
    <div>
      <div onClick={handleCharacterChoice} class="Character">
        <img class="Character_shadow pixelart" src={shadow}/>
        <img class={`Character_spritesheet pixelart face-${props.dir}`} src={props.avatar}/>
      </div>
    </div>
  );
}

export default Avatar;
