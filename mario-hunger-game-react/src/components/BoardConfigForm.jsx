import React, { useContext } from "react";
import { Context } from "../context/Context";

export const BoardConfigForm = ({ onSubmit }) => {
  const { size, setSize, setIsGameStarted } = useContext(Context);

  return (
    <div className="config-container">
      <h4>Configure Mario Game Board</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsGameStarted(true);
        }}
      >
        <div>
          <label htmlFor="rows">Rows</label>
          <input
            type="number"
            name="rows"
            placeholder="5"
            min={1}
            max={10}
            value={size.rows}
            onChange={(e) => setSize({ ...size, rows: e.target.value })}
          />
          <div className="helperText">should not exceed 10.</div>
        </div>
        <div>
          <label htmlFor="cols">Columns</label>
          <input
            type="number"
            name="cols"
            placeholder="5"
            min={1}
            max={10}
            value={size.cols}
            onChange={(e) => setSize({ ...size, cols: e.target.value })}
          />
          <div className="helperText">should not exceed 10.</div>
        </div>

        <button type="submit">Start Game</button>
      </form>
    </div>
  );
};
