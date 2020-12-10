import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Components/Board';
import { calculateWinner, calculateTie } from './calculateWinner';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 0,
            xIsNext: true,
            winCond: []
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(current.squares)[0];
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState({
            history: history.concat([{ squares: squares }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
            winCond: []
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const [winner, winCond] = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Restart Game';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
            console.log(this.state.winCond.length === 0);
            if (this.state.winCond.length === 0) {
                this.setState({ winCond: winCond });
            }
        } else if (calculateTie(current.squares)) {
            status = 'Tie';
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winCond={this.state.winCond}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
