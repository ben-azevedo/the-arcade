import { Link } from "react-router-dom";
import "../App.css";
import title from "../images/theArcadeTitle.png";
import coin from "../images/insertCoin.gif";

function Home(props) {
  return (
    <div class="home">
      <div class="homeTitle">
        <div style={{ color: "white", fontSize: "8vw", textAlign: "center"}}>Welcome to</div>
        <img class="homeTitle" src={title} />
      </div>
      <Link to="/avatar_menu">
        <img
          style={{
            width: "30vw",
            background: "black",
            padding: "2vw",
            borderRadius: "2vw",
          }}
          src={coin}
        />
      </Link>
    </div>
  );
}

export default Home;
