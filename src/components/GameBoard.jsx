export default function GameBoard({ onSubmit, board, buttonDisable }) {
    return (
        <>
            <ol id="playerGameBoard">
                {board.map((row, rowIndex) => 
                    <li className="playerCol" key={rowIndex}>
                        <ol className="gameBoardRow">
                            {row.map((playerSign, colIndex) => 
                                <li key={colIndex}>
                                    <button className="gameBoardCol" onClick={() => onSubmit(rowIndex, colIndex)} disabled={((playerSign !== null) || (buttonDisable))}>
                                        {playerSign}
                                    </button>
                                </li>
                            )}
                        </ol>
                    </li>
                )}
            </ol>
        </>
    );
}