import "./Explorer.css";
import { useState } from "react";

function Explorer(props) {
  console.log(props.avatar);
  // const [x, setX] = useState(88);
  // const [y, setY] = useState(297);

  //start in the middle of the map
  let pixelSize = 4;
  const camera_left = pixelSize * 48;
  const camera_top = pixelSize * 42;
  let x = 88;
  let y = 297;
  let held_directions = []; //State of which arrow keys we are holding down
  let speed = 1; //How fast the character moves in pixels per frame
  let held_direction = held_directions[0];
  let mapTransform = "translate3d(0px,0,0)";
  let charTransform = "transform: translate3d(0px,0,0)";

  const placeCharacter = () => {
    pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--pixel-size"
      )
    );
    held_direction = held_directions[0];
    if (held_direction) {
      if (held_direction === directions.right) {
        x += speed;
      }
      if (held_direction === directions.left) {
        x -= speed;
      }
      if (held_direction === directions.down) {
        y += speed;
      }
      if (held_direction === directions.up) {
        y -= speed;
      }
    }

    var leftLimit = 44;
    var rightLimit = 132;
    var topLimit = 17;
    var bottomLimit = 300;
    if (x < leftLimit) {
      x = leftLimit;
    }
    if (x > rightLimit) {
      x = rightLimit;
    }
    if (y < topLimit) {
      y = topLimit;
    }
    if (y > bottomLimit) {
      y = bottomLimit;
    }
    if (x === 88 && y === 60) {
      doTheThing
    }
    console.log(`x:${x} y:${y}`)
    mapTransform = `translate3d( ${-x * pixelSize + camera_left}px, ${-y * pixelSize + camera_top
    }px, 0 )`;
    charTransform = `translate3d( ${x * pixelSize}px, ${y * pixelSize}px, 0 )`;
  };

  //Set up the game loop
  const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
      step();
    });
  };
  step(); //kick off the first step!

  const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
  };
  const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
  };

  document.addEventListener("keydown", (e) => {
    var dir = keys[e.which];
    if (dir && held_directions.indexOf(dir) === -1) {
      held_directions.unshift(dir);
    }
  });

  document.addEventListener("keyup", (e) => {
    var dir = keys[e.which];
    var index = held_directions.indexOf(dir);
    if (index > -1) {
      held_directions.splice(index, 1);
    }
  });

  var isPressed = false;
  const removePressedAll = () => {
    document.querySelectorAll(".dpad-button").forEach((d) => {
      d.classList.remove("pressed");
    });
  };
  document.body.addEventListener("mousedown", () => {
    console.log(`mouse is down`);
    isPressed = true;
  });
  document.body.addEventListener("mouseup", () => {
    console.log("mouse is up");
    isPressed = false;
    held_directions = [];
    removePressedAll();
  });

  const handleDpadPress = (direction, click) => {
    if (click) {
      isPressed = true;
    }
    held_directions = isPressed ? [direction] : [];

    if (isPressed) {
      removePressedAll();
      console.log(`mouse is down on .dpad-${direction}`);
      document.querySelector(".dpad-" + direction).classList.add("pressed");
    }
  };


  return (
    <div>
      <div class="frame">
        <div class="corner_topleft"></div>
        <div class="corner_topright"></div>
        <div class="corner_bottomleft"></div>
        <div class="corner_bottomright"></div>

        <div class="camera">
          <div
            style={{
              transform: mapTransform,
            }}
            class="map pixel-art"
          >
            <div
              style={{
                transform: charTransform,
                background: `url(${props.avatar}) no- repeat no-repeat`,
              }}
              class="game_character"
              facing={held_direction}
              walking={held_direction ? "true" : "false"}
            >
              <div class="shadow pixel-art"></div>
              <div
                style={{
                  position: "absolute",
                  background: `url(${props.avatar}) no-repeat no-repeat`,
                  backgroundSize: "100%",
                }}
                class="game_character_spritesheet pixel-art"
              ></div>
            </div>
          </div>

          <div class="dpad">
            <div class="DemoDirectionUI flex-center">
              <button
                onMouseDown={(e) => handleDpadPress(directions.left, true)}
                class="dpad-button dpad-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.5 13 13"
                  shape-rendering="crispEdges"
                >
                  <path
                    class="Arrow_outline-top"
                    stroke="#5f5f5f"
                    d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                  />
                  <path
                    class="Arrow_surface"
                    stroke="#f5f5f5"
                    d="M1 1h11M1 2h11M1 3h5M7 3h5M1 4h4M7 4h5M1 5h3M7 5h5M1 6h4M7 6h5M1 7h5M7 7h5M1 8h11"
                  />
                  <path
                    class="Arrow_arrow-inset"
                    stroke="#434343"
                    d="M6 3h1M5 4h1M4 5h1"
                  />
                  <path
                    class="Arrow_arrow-body"
                    stroke="#5f5f5f"
                    d="M6 4h1M5 5h2M5 6h2M6 7h1"
                  />
                  <path
                    class="Arrow_outline-bottom"
                    stroke="#434343"
                    d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                  />
                  <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                  <path
                    class="Arrow_front"
                    stroke="#cccccc"
                    d="M1 10h11M1 11h11"
                  />
                </svg>
              </button>
              <button
                onMouseDown={(e) => handleDpadPress(directions.up, true)}
                class="dpad-button dpad-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.5 13 13"
                  shape-rendering="crispEdges"
                >
                  <path
                    class="Arrow_outline-top"
                    stroke="#5f5f5f"
                    d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                  />
                  <path
                    class="Arrow_surface"
                    stroke="#f5f5f5"
                    d="M1 1h11M1 2h11M1 3h11M1 4h5M7 4h5M1 5h4M8 5h4M1 6h3M9 6h3M1 7h11M1 8h11"
                  />
                  <path
                    class="Arrow_arrow-inset"
                    stroke="#434343"
                    d="M6 4h1M5 5h1M7 5h1"
                  />
                  <path
                    class="Arrow_arrow-body"
                    stroke="#5f5f5f"
                    d="M6 5h1M4 6h5"
                  />
                  <path
                    class="Arrow_outline-bottom"
                    stroke="#434343"
                    d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                  />
                  <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                  <path
                    class="Arrow_front"
                    stroke="#cccccc"
                    d="M1 10h11M1 11h11"
                  />
                </svg>
              </button>
              <button
                onMouseDown={(e) => handleDpadPress(directions.down, true)}
                class="dpad-button dpad-down"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.5 13 13"
                  shape-rendering="crispEdges"
                >
                  <path
                    class="Arrow_outline-top"
                    stroke="#5f5f5f"
                    d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                  />
                  <path
                    class="Arrow_surface"
                    stroke="#f5f5f5"
                    d="M1 1h11M1 2h11M1 3h11M1 4h3M9 4h3M1 5h4M8 5h4M1 6h5M7 6h5M1 7h11M1 8h11"
                  />
                  <path class="Arrow_arrow-inset" stroke="#434343" d="M4 4h5" />
                  <path
                    class="Arrow_arrow-body"
                    stroke="#5f5f5f"
                    d="M5 5h3M6 6h1"
                  />
                  <path
                    class="Arrow_outline-bottom"
                    stroke="#434343"
                    d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                  />
                  <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                  <path
                    class="Arrow_front"
                    stroke="#cccccc"
                    d="M1 10h11M1 11h11"
                  />
                </svg>
              </button>
              <button
                onMouseDown={(e) => handleDpadPress(directions.right, true)}
                class="dpad-button dpad-right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -0.5 13 13"
                  shape-rendering="crispEdges"
                >
                  <path
                    class="Arrow_outline-top"
                    stroke="#5f5f5f"
                    d="M1 0h11M0 1h1M12 1h1M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h1M0 7h1M12 7h1M0 8h1M12 8h1"
                  />
                  <path
                    class="Arrow_surface"
                    stroke="#f5f5f5"
                    d="M1 1h11M1 2h11M1 3h5M7 3h5M1 4h5M8 4h4M1 5h5M9 5h3M1 6h5M8 6h4M1 7h5M7 7h5M1 8h11"
                  />
                  <path
                    class="Arrow_arrow-inset"
                    stroke="#434343"
                    d="M6 3h1M7 4h1M8 5h1"
                  />
                  <path
                    class="Arrow_arrow-body"
                    stroke="#5f5f5f"
                    d="M6 4h1M6 5h2M6 6h2M6 7h1"
                  />
                  <path
                    class="Arrow_outline-bottom"
                    stroke="#434343"
                    d="M0 9h1M12 9h1M0 10h1M12 10h1M0 11h1M12 11h1M1 12h11"
                  />
                  <path class="Arrow_edge" stroke="#ffffff" d="M1 9h11" />
                  <path
                    class="Arrow_front"
                    stroke="#cccccc"
                    d="M1 10h11M1 11h11"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explorer;
