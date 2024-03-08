import { Backdrop, Typography } from '@mui/material';

const GameOver = ({ winner, onRestart }) => {
    return (
        <>
            {/* Celebration Backdrop */}
            <Backdrop open={winner}>
                <div className='gameResult'>
                    <h2>Game Over</h2>
                    {winner ? (
                        <>
                            <Typography variant="h4">
                                🎉 Congratulation {winner} won! 🎉
                            </Typography>
                        </>
                    ) : (
                        <Typography variant="body1">
                            It's a draw!
                        </Typography>
                    )}
                    <p>
                        <button onClick={onRestart}>Rematch!</button>
                    </p>
                </div>
            </Backdrop>
        </>
    );
}

export default GameOver;
