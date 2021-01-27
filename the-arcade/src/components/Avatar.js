import shadow from "../images/shadow.png";
import "./Avatar.css";
import { useState, useEffect } from "react";

function Avatar(props) {
  const [dir, setDir] = useState("Character_spritesheet pixelart face-down")

  const handleCharacterChoice = () => {
    props.setAvatar(props.avatar);
  }
  useEffect(() => {

  }, [])

  return (
    <div>
      <div onClick={handleCharacterChoice} class="Character">
        <img class="Character_shadow pixelart" src={shadow}/>
        <img class="Character_spritesheet pixelart face-down" src={props.avatar}/>
      </div>
    </div>
  );
}

export default Avatar;
