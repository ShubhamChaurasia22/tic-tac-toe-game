import { useState } from 'react';
import TitleCard from './components/TitleCard';
import PlayesCard from './components/PlayersCard';
import GameBoard from './components/GameBoard';
import TabLog from './components/TabLog';
import { WINNING_COMBINATIONS } from './winning-combination';
import GameOver from './components/GameOver';
import './App.css';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function driveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function driveWinner (gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function driveGameBoard(gameTurns) {
  let gameBoard = INITIAL_GAME_BOARD;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {

  const [players, setPlayers] = useState(PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = driveActivePlayer(gameTurns);
  const gameBoard = driveGameBoard(gameTurns);
  const winner = driveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSubmitActive(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = driveActivePlayer(prevTurns);

      const updateTurns = [
        { square: {
          row: rowIndex,
          col: colIndex
        },
        player: currentPlayer
       },
        ...prevTurns];

      return updateTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
    window.location.reload();
  }

  function hanldePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    })
  }


  return (
    <>
      <TitleCard />
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
      <div className="gameBox">
        <div className="container">
          <ol className="playerCard highlighted">
            <PlayesCard initialName={PLAYERS.X} playerSign="X" isActive={activePlayer === 'X'} onChangeName={hanldePlayerNameChange} />
            <PlayesCard initialName={PLAYERS.O} playerSign="O" isActive={activePlayer === 'O'} onChangeName={hanldePlayerNameChange} />
          </ol>
          <GameBoard onSubmit={handleSubmitActive} board={gameBoard} buttonDisable={(winner || hasDraw)} />
        </div>
        <TabLog turns={gameTurns} />
      </div>
    </>
  )
}

export default App
