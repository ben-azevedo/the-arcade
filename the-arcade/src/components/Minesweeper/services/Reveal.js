function reveal(map, x, y, nonMineCount) {
  if (map[x][y].revealed) {
    return;
  } else {
    // while toCheck stack is not empty, check neighboring cells
    let toCheck = [];
    toCheck.push(map[x][y]);
    while (toCheck.length > 0) {
      // c is short for current
      let c = toCheck.pop();
      if (!c.revealed) {
        nonMineCount--;
      }
      c.revealed = true;

      if (c.value === 0) {
        // zeroes get pushed to the stack
        
        // check top left
        if (c.x > 0 && c.y > 0 && map[c.x - 1][c.y - 1].value === 0 && !map[c.x - 1][c.y - 1].revealed) {
          toCheck.push(map[c.x - 1][c.y - 1]);
        }

        // check above
        if (c.y > 0 && map[c.x][c.y - 1].value === 0 && !map[c.x][c.y - 1].revealed) {
          toCheck.push(map[c.x][c.y - 1]);
        }

        // check top right
        if (c.x < map.length - 1 && c.y > 0 && map[c.x + 1][c.y - 1].value === 0 && !map[c.x + 1][c.y - 1].revealed) {
          toCheck.push(map[c.x + 1][c.y - 1]);
        }

        // check left
        if (c.x > 0 && map[c.x - 1][c.y].value === 0 && !map[c.x - 1][c.y].revealed) {
          toCheck.push(map[c.x - 1][c.y]);
        }

        // check right
        if (c.x < map.length - 1 && map[c.x + 1][c.y].value === 0 && !map[c.x + 1][c.y].revealed) {
          toCheck.push(map[c.x + 1][c.y]);
        }

        // check bottom left
        if (c.x > 0 && c.y < map[0].length - 1 && map[c.x - 1][c.y + 1].value === 0 && !map[c.x - 1][c.y + 1].revealed) {
          toCheck.push(map[c.x - 1][c.y + 1]);
        }

        // check under
        if (c.y < map[0].length - 1 && map[c.x][c.y + 1].value === 0 && !map[c.x][c.y + 1].revealed) {
          toCheck.push(map[c.x][c.y + 1]);
        }

        // check bottom right
        if (c.x < map.length - 1 && c.y < map[0].length - 1 && map[c.x + 1][c.y + 1].value === 0 && !map[c.x + 1][c.y + 1].revealed) {
          toCheck.push(map[c.x + 1][c.y + 1]);
        }

        // non-zeroes get revealed
        // check top left
        if (c.x > 0 && c.y > 0 && !map[c.x - 1][c.y - 1].revealed) {
          map[c.x - 1][c.y - 1].revealed = true;
          nonMineCount--;
        }

        // check above
        if (c.y > 0 && !map[c.x][c.y - 1].revealed) {
          map[c.x][c.y - 1].revealed = true;
          nonMineCount--;
        }

        // check top right
        if (c.x < map.length - 1 && c.y > 0 && !map[c.x + 1][c.y - 1].revealed) {
          map[c.x + 1][c.y - 1].revealed = true;
          nonMineCount--;
        }

        // check left
        if (c.x > 0 && !map[c.x - 1][c.y].revealed) {
          map[c.x - 1][c.y].revealed = true;
          nonMineCount--;
        }

        // check right
        if (c.x < map.length - 1 && !map[c.x + 1][c.y].revealed) {
          map[c.x + 1][c.y].revealed = true;
          nonMineCount--;
        }

        // check bottom left
        if (c.x > 0 && c.y < map[0].length - 1 && !map[c.x - 1][c.y + 1].revealed) {
          map[c.x - 1][c.y + 1].revealed = true;
          nonMineCount--;
        }

        // check under
        if (c.y < map[0].length - 1 && !map[c.x][c.y + 1].revealed) {
          map[c.x][c.y + 1].revealed = true;
          nonMineCount--;
        }

        // check bottom right
        if (c.x < map.length - 1 && c.y < map[0].length - 1 && !map[c.x + 1][c.y + 1].revealed) {
          map[c.x + 1][c.y + 1].revealed = true;
          nonMineCount--;
        }
      }
    }
  }
  return { map, nonMineCount };
}

export default reveal;