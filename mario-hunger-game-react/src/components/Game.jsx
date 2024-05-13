import React, { useContext } from "react";
import { Board } from "./Board";
import { BoardConfigForm } from "./BoardConfigForm";
import { Context } from "../context/Context";

export const Game = () => {
  const { size, isGameStarted } = useContext(Context);
  return (
    <div>{isGameStarted ? <Board size={size} /> : <BoardConfigForm />}</div>
  );
};
