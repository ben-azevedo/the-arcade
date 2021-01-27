import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react"; 
import Home from "./components/Home.js";
import AvatarMenu from "./components/AvatarMenu.js";
import Explorer from "./components/Explorer.js";
import "./App.css";

function App() {
  const [avatar, setAvatar] = useState("grayscaleAvatar.png")
  console.log(avatar);

  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/avatar_menu">
        <AvatarMenu setAvatar={setAvatar}/>
      </Route>
      <Route path="/explorer">
        <Explorer avatar={avatar}/>
      </Route>
    </div>
  );
}

export default App;
