import { Link } from "react-router-dom";
import "../App.css";
import title from "../images/theArcadeTitle.png";

function Home(props) {
  return (
    <div class="home">
      <div class="homeTitle">
        <div style={{color: "white", fontSize: "8vw"}}>Welcome to</div>
        <img class="homeTitle" src={title} />
      </div>
      <Link to="/avatar_menu">
        <div style={{
          textDecoration: "none",
          color: "white",
          fontSize: "5vw",
          padding: "0 2vw 0 2vw ",
          borderRadius: "2vw",
          background: "black",
          border: "3px solid white"
        }}>INSERT 💰 TO CONTINUE</div>
      </Link>
    </div>
  );
}

export default Home;
