import React, {useState} from 'react';
import Board from './Board';
import './Game.css';
import { calculateWinner } from '../helper';
const Game = () => {
const [board, setBoard] = useState(Array(9).fill(null))
const [xIsNext, sexXIsnext] = useState(true)
const winner = calculateWinner(board)

const handleClick = (index) => {
    const boardCopy = [...board]
    //был ли клик по ячейке или игра окончена
    if(winner || boardCopy[index])return
    // определяем, чей ход
    boardCopy[index] = xIsNext ? 'X' : '0'
    //обновляем наш стейт
    setBoard(boardCopy)
    sexXIsnext(!xIsNext)
}

const startNewGame = () => {
    return (
        <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>


    )
}
    return (
        <div className='wrapper imgDedMoroz'>
            {startNewGame()}
            <Board squares={board} click={handleClick}/>
            <p className='game_info'>
                { winner ? 'Победитель ' + winner : 'Сeйчас ходит ' + (xIsNext ? 'X' : '0')}
            </p>
        </div>
    );
}

export default Game;
