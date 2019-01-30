import random from 'lodash.random';

/**
 * @TODO: Add documentation for all these methods.
 */
const startGame = (gameSettings) => {
  const { rows, columns, bombs } = gameSettings
  let grid = initGrid(rows, columns);

  grid = setBombs(grid, bombs, rows, columns);
  grid = setNumbers(grid);

  return grid;
};

const initGrid = (rows, columns) => {
  let grid = [];

  for (let i = 0; i < rows; i++) {
    grid[i] = [];

    for (let j = 0; j < columns; j++) {
      grid[i][j] = {
        open: false,
        flagged: false,
        hasBomb: false,
        bombsCount: 0,
        empty: false,
        x: j,
        y: i,
      };
    }
  }

  return grid;
};

const setBombs = (grid, bombs, rows, columns) => {
  const newGrid = [...grid];
  const bombsPositions = setRandomPositions(bombs, columns - 1, rows - 1);

  bombsPositions.forEach(bomb => {
    const { x, y } = bomb;
    const gridElement = newGrid[y][x];

    gridElement.hasBomb = true;
    gridElement.x = x;
    gridElement.y = y;
  });

  return newGrid;
};

const setRandomPositions = (bombs, xMax, yMax) => {
	const positions = [];

  while (positions.length < bombs) {
    const pos = { x: random(xMax), y: random(yMax) };
    const isNewPosInPrevArray = positions.some(position => pos.x === position.x && pos.y === position.y);

    if (!isNewPosInPrevArray) {
      positions.push(pos);
    }
  }

	return positions;
}

const setNumbers = (grid) => {
  const newGrid = [...grid];

  newGrid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (!cell.hasBomb) {
        let bombsCount = 0;

        getBoundariesElements({ x, y }).forEach(border => {
          const gridRow = newGrid[border.y];
          const gridCell = gridRow && gridRow[border.x];

          if (gridCell && gridCell.hasBomb) {
            bombsCount++;
          }
        });

        cell.bombsCount = bombsCount;
      }
    });
  });

  return newGrid;
}

const getBoundariesElements = ({ x, y }) => {
  return [
    // Left elements
    { x: x-1, y: y+1 },
    { x: x-1, y: y },
    { x: x-1, y: y-1 },

    // Center elements
    { x: x, y: y+1 },
    { x: x, y: y-1 },

    // Right elements
    { x: x+1, y: y+1 },
    { x: x+1, y: y },
    { x: x+1, y: y-1 },
  ];
}

const openBoundariesCells = (grid, cell) => {
  const filteredBoundaries = getBoundariesElements(cell).filter(boundary => {
    const gridRow = grid[boundary.y];
    const gridCell = gridRow && gridRow[boundary.x];

    return gridCell;
  });
  const boundaryCells = filteredBoundaries.map(boundary => grid[boundary.y][boundary.x]);

  boundaryCells.forEach(boundaryCell => {
    if (
      (boundaryCell.x !== cell.x || boundaryCell.y !== cell.y) &&
      !boundaryCell.open &&
      !boundaryCell.hasBomb
    ) {
      grid[boundaryCell.y][boundaryCell.x].open = true;

      if (boundaryCell.bombsCount === 0) {
        openBoundariesCells(grid, boundaryCell);
      }
    }
  });
};

const openCell = (grid, selectedCell) => {
  const newGrid = [...grid];
  const { x, y } = selectedCell;

  newGrid[y][x].open = true;

  if (newGrid[y][x].bombsCount === 0) {
    openBoundariesCells(newGrid, selectedCell)
  };

  return newGrid;
};

const gameOver = (grid) => {
  const newGrid = [...grid];

  grid.forEach((row, y) => row.forEach((cell, x) => newGrid[y][x].open = true));

  return newGrid;
};

const setFlag = (grid, selectedCell, flagValue) => {
  const newGrid = [...grid];
  const { x, y } = selectedCell;

  newGrid[y][x].flagged = flagValue;

  return newGrid;
};

const gameWin = (grid, bombsSelected, rowsSelected, columnsSelected) => {
  let openedCells = 0;
  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell.open) {
        openedCells++;
      };
    });
  });

  const result = (rowsSelected * columnsSelected) - openedCells;

  return result === bombsSelected;
}

export default {
  startGame,
  openCell,
  gameOver,
  setFlag,
  gameWin,
};
