import React, { useEffect, useState } from "react";
import "./Board.css";

export const Board = ({ size }) => {
  const { rows, cols } = size;
  const [marioPosition, setMarioPosition] = useState([0, 0]);
  const [mushroomPositions, setMushroomPositions] = useState([]);
  const [steps, setSteps] = useState(0);

  const checkForDuplicatePosition = (positions, rowIndex, colIndex) => {
    if (rowIndex === marioPosition[0] && colIndex === marioPosition[1])
      return true;
    const isDuplicate = positions.filter(
      (pos) => pos[0] === rowIndex && pos[1] === colIndex
    );
    return isDuplicate.length > 0 ? true : false;
  };

  const generateMushroomPositions = (rows) => {
    const positions = [];
    while (positions.length < rows) {
      const rowIndex = Math.floor(Math.random() * rows);
      const colIndex = Math.floor(Math.random() * cols);
      const isDuplicate = checkForDuplicatePosition(
        positions,
        rowIndex,
        colIndex
      );
      if (!isDuplicate) {
        positions.push([rowIndex, colIndex]);
      }
    }
    return positions;
  };

  useEffect(() => {
    setMushroomPositions(generateMushroomPositions(rows));
  }, [rows]);

  const handleKeyDown = (event) => {
    const newPosition = [...marioPosition];
    switch (event.key) {
      case "ArrowUp":
        newPosition[0] = Math.max(0, newPosition[0] - 1);
        break;
      case "ArrowDown":
        newPosition[0] = Math.min(rows - 1, newPosition[0] + 1);
        break;
      case "ArrowLeft":
        newPosition[1] = Math.max(0, newPosition[1] - 1);
        break;
      case "ArrowRight":
        newPosition[1] = Math.min(cols - 1, newPosition[1] + 1);
        break;
      default:
        break;
    }
    setMarioPosition(newPosition);
    checkForMushroom(newPosition);
  };

  const checkForMushroom = (position) => {
    const mushroomIndex = mushroomPositions.findIndex(
      (pos) => pos[0] === position[0] && pos[1] === position[1]
    );
    if (mushroomIndex !== -1) {
      const newMushroomPositions = [...mushroomPositions];
      newMushroomPositions.splice(mushroomIndex, 1);
      setMushroomPositions(newMushroomPositions);
    }
  };

  const renderCell = (rowIndex, colIndex) => {
    const isMario =
      rowIndex === marioPosition[0] && colIndex === marioPosition[1];
    const isMushroom = mushroomPositions.some(
      (pos) => pos[0] === rowIndex && pos[1] === colIndex
    );
    return (
      <div
        key={`${rowIndex}-${colIndex}`}
        className={`cell ${isMario ? "mario" : ""} ${
          isMushroom ? "mushroom" : ""
        }`}
      />
    );
  };

  return (
    <div>
      <div className="board" onKeyDown={handleKeyDown} tabIndex="0">
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {[...Array(cols)].map((_, colIndex) =>
              renderCell(rowIndex, colIndex)
            )}
          </div>
        ))}
      </div>

      <div className="steps">
        Steps: <div>{steps}</div>
      </div>
    </div>
  );
};
