import React from "react";
import { useState } from "react";
import Square from "./Square";
const GameBoard = () => {
  const [currentPlayer, setCurrentPalyer] = useState("X");
  const [countMoves, setCountMoves] = useState(0);
  const [gameActive,setGameActive] = useState(true);
  const [winingPlayer,setWiningPlayer] = useState("");
  const emptyArray = [
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ];
  const [gameState, setGameState] = useState([
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
    { value: null },
  ]);

  const evaluateMove = (index) => {
    let newGameState = [...gameState];
    if (newGameState[index].value == null && gameActive) {
      newGameState[index].value = currentPlayer;
      setGameState(newGameState);
      //Check Win
      if (checkWin()) {
          setGameActive(false);
          setWiningPlayer(`Player ${checkWin()} win's`);
          return;
      }
      //Check Draw
      if (countMoves == 8) {
        setGameActive(false);
        setWiningPlayer(`Game is Draw`);
        return;
      }
      let nextPlayer = currentPlayer == "X" ? "0" : "X";
      setCurrentPalyer(nextPlayer);
      let newCountMoves = countMoves + 1;
      setCountMoves(newCountMoves);
    }

    console.table(gameState);
  };

  const checkWin = () => {
    let win = false;
    if (
      gameState[0].value != null &&
      gameState[0].value == gameState[1].value &&
      gameState[1].value == gameState[2].value
    ) {
      win = gameState[0].value;
    }
    if (
      gameState[3].value != null &&
      gameState[3].value == gameState[4].value &&
      gameState[4].value == gameState[5].value
    ) {
      win = gameState[3].value;
    }
    if (
        gameState[6].value !== null &&
        gameState[6].value == gameState[7].value &&
        gameState[7].value == gameState[8].value
      ) {
        win = gameState[6].value;
      }
      if (
        gameState[3].value !== null &&
        gameState[3].value == gameState[4].value &&
        gameState[4].value == gameState[5].value
      ) {
        win = gameState[3].value;
      }
      if (
        gameState[0].value !== null &&
        gameState[0].value == gameState[4].value &&
        gameState[4].value == gameState[8].value
      ) {
        win = gameState[0].value;
      }
      if (
        gameState[3].value !== null &&
        gameState[3].value == gameState[4].value &&
        gameState[4].value == gameState[5].value
      ) {
        win = gameState[3].value;
      }
      if (
        gameState[2].value !== null &&
        gameState[2].value == gameState[4].value &&
        gameState[4].value == gameState[6].value
      ) {
        win = gameState[2].value;
      }
      if (
        gameState[0].value !== null &&
        gameState[0].value == gameState[3].value &&
        gameState[3].value == gameState[6].value
      ) {
        win = gameState[0].value;
      }
      if (
        gameState[1].value !== null &&
        gameState[1].value == gameState[4].value &&
        gameState[4].value == gameState[7].value
      ) {
        win = gameState[1].value;
      }
      if (
        gameState[2].value !== null &&
        gameState[2].value == gameState[5].value &&
        gameState[5].value == gameState[8].value
      ) {
        win = gameState[2].value;
      }
    return win;
  };
  //set the current mark
  //change current player
  return (
    <>
      <div className="col-md-12 col-12 text-center">
        <h2>Current Player : {currentPlayer}</h2>
      </div>
      <div className="bg-white col-md-6 offset-md-3 gameBoard shadow-sn row p-4">
        {gameState.map((square, key) => (
          <Square
            key={key}
            gameState={gameState}
            index={key}
            executor={evaluateMove}
          />
        ))}
      </div>
      <div  className="col-md-12 col-12 text-center mt-2"><h2>{
          winingPlayer
      }</h2>
      </div>
      <div className="col-md-12 col-12 text-center mt-2">
        <button
          onClick={(e) => {
            setGameState(emptyArray);
            setCountMoves(0);
            setGameActive(true);
            setWiningPlayer("");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default GameBoard;
