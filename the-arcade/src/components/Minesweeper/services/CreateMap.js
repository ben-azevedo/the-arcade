function createMap(row, col, bombs) {
  let board = [];

  for (let x = 0; x < row; x++) {
    let mapRow = [];
    for (let y = 0; y < col; y++) {
      mapRow.push({
        x: x,
        y: y,
        value: 0,
        flagged: false,
        revealed: false,
      });
    }
    board.push(mapRow);
  }

  addBombs(board, row, col, bombs);
  finalizeMap(board, row, col);

  return board;
}

function addBombs(map, row, col, bombs) {
  for (let i = 0; i < bombs; i++) {
    let x = Math.floor(Math.random() * row);
    let y = Math.floor(Math.random() * col);

    if (map[x][y].value === 0) {
      map[x][y].value = "💣";
    } else {
      i--;
    }
  }
}

function finalizeMap(map, row, col) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let bombCount = 0;
      if (map[i][j].value !== "💣") {
        if (i === 0 && j === 0) {
          // top left of map
          if (map[i + 1][j + 1].value === "💣") {
            bombCount++;
          } // bottom right
          if (map[i + 1][j].value === "💣") {
            bombCount++;
          } // under
          if (map[i][j + 1].value === "💣") {
            bombCount++;
          } // right
        } else if (i === 0 && j === col - 1) {
          // top right of map
          if (map[i + 1][j].value === "💣") {
            bombCount++;
          } // under
          if (map[i + 1][j - 1].value === "💣") {
            bombCount++;
          } // bottom left
          if (map[i][j - 1].value === "💣") {
            bombCount++;
          } // left
        } else if (i === row - 1 && j === col - 1) {
          // bottom right of map
          if (map[i - 1][j - 1].value === "💣") {
            bombCount++;
          } // top left
          if (map[i - 1][j].value === "💣") {
            bombCount++;
          } // above
          if (map[i][j - 1].value === "💣") {
            bombCount++;
          } // left
        } else if (i === row - 1 && j === 0) {
          // bottom left of map
          if (map[i - 1][j].value === "💣") {
            bombCount++;
          } // above
          if (map[i - 1][j + 1].value === "💣") {
            bombCount++;
          } // top right
          if (map[i][j + 1].value === "💣") {
            bombCount++;
          } // right
        } else if (i === 0) {
          // top edge of map
          if (map[i + 1][j + 1].value === "💣") {
            bombCount++;
          } // bottom right
          if (map[i + 1][j].value === "💣") {
            bombCount++;
          } // under
          if (map[i + 1][j - 1].value === "💣") {
            bombCount++;
          } // bottom left
          if (map[i][j - 1].value === "💣") {
            bombCount++;
          } // left
          if (map[i][j + 1].value === "💣") {
            bombCount++;
          } // right
        } else if (j === col - 1) {
          // right edge of map
          if (map[i - 1][j - 1].value === "💣") {
            bombCount++;
          } // top left
          if (map[i - 1][j].value === "💣") {
            bombCount++;
          } // above
          if (map[i + 1][j].value === "💣") {
            bombCount++;
          } // under
          if (map[i + 1][j - 1].value === "💣") {
            bombCount++;
          } // bottom left
          if (map[i][j - 1].value === "💣") {
            bombCount++;
          } // left
        } else if (i === row - 1) {
          // bottom edge of map
          if (map[i - 1][j - 1].value === "💣") {
            bombCount++;
          } // top left
          if (map[i - 1][j].value === "💣") {
            bombCount++;
          } // above
          if (map[i - 1][j + 1].value === "💣") {
            bombCount++;
          } // top right
          if (map[i][j - 1].value === "💣") {
            bombCount++;
          } // left
          if (map[i][j + 1].value === "💣") {
            bombCount++;
          } // right
        } else if (j === 0) {
          // left edge of map
          if (map[i - 1][j].value === "💣") {
            bombCount++;
          } // above
          if (map[i - 1][j + 1].value === "💣") {
            bombCount++;
          } // top right
          if (map[i + 1][j + 1].value === "💣") {
            bombCount++;
          } // bottom right
          if (map[i + 1][j].value === "💣") {
            bombCount++;
          } // under
          if (map[i][j + 1].value === "💣") {
            bombCount++;
          } // right
        } else {
          if (map[i - 1][j - 1].value === "💣") {
            bombCount++;
          } // top left
          if (map[i - 1][j].value === "💣") {
            bombCount++;
          } // above
          if (map[i - 1][j + 1].value === "💣") {
            bombCount++;
          } // top right
          if (map[i + 1][j + 1].value === "💣") {
            bombCount++;
          } // bottom right
          if (map[i + 1][j].value === "💣") {
            bombCount++;
          } // under
          if (map[i + 1][j - 1].value === "💣") {
            bombCount++;
          } // bottom left
          if (map[i][j - 1].value === "💣") {
            bombCount++;
          } // left
          if (map[i][j + 1].value === "💣") {
            bombCount++;
          } // right
        }
        map[i][j].value = bombCount;
      }
    }
  }
}

export default createMap;
