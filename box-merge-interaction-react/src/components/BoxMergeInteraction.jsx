import React, { useState } from "react";

export const BoxMergeInteraction = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (boxIndex) => {
    setSelectedBox(boxIndex);
  };

  const displayStyle = (boxIndex) => {
    if (selectedBox === null) return "box";
    return selectedBox === boxIndex ? "box" : "hidden";
  };

  return (
    <div className="box-container">
      {selectedBox === null ? (
        [1, 2, 3].map((boxIndex) => (
          <div
            key={boxIndex}
            className={displayStyle(boxIndex)}
            onClick={() => {
              handleClick(boxIndex);
            }}
          >
            {boxIndex}
          </div>
        ))
      ) : (
        <div class="final-container">
          <div className="box" onClick={() => setSelectedBox(null)}>
            {selectedBox}
          </div>
          <div class="mergedContainer">
            {[1, 2, 3].map(
              (boxIndex) =>
                boxIndex !== selectedBox && (
                  <div className="box">{boxIndex}</div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};
