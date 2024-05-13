import { useState } from "react";

export const useMario = () => {
  const [size, setSize] = useState({ row: 5, col: 5 });
  const [isGameStarted, setIsGameStarted] = useState(false);

  console.log(isGameStarted);
  return {
    size,
    setSize,
    isGameStarted,
    setIsGameStarted
  };
};
