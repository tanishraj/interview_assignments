import React, { useState } from "react";

export const ColorBoxInteraction = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (boxIndex) => {
    setSelectedBox(boxIndex);
  };

  const detemineBoxColor = (boxIndex) => {
    if (selectedBox === null) {
      return "blue";
    }
    return selectedBox === boxIndex ? "blue" : "red";
  };

  return (
    <div>
      <div className="box-container">
        {[1, 2, 3].map((boxIndex) => (
          <div
            key={boxIndex}
            className="box"
            style={{ backgroundColor: detemineBoxColor(boxIndex) }}
            onClick={() => handleClick(boxIndex)}
            title="click me"
          ></div>
        ))}
      </div>
    </div>
  );
};
