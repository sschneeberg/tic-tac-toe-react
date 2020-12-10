import React from 'react';
import Square from './Square';
import '../index.css';

class Board extends React.Component {
    renderSquare(i, color) {
        return (
            <Square
                key={i}
                style={{ backgroundColor: color }}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderSquares() {
        console.log(this.props.winCond);
        let squares = [];
        let color = 'white';
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let ind = i * 3 + j;
                if (this.props.winCond.indexOf(ind) !== -1) {
                    color = 'lightgreen';
                } else {
                    color = 'white';
                }
                squares.push(this.renderSquare(ind, color));
            }
        }
        return squares;
    }

    render() {
        return <div className="board">{this.renderSquares()}</div>;
    }
}

export default Board;
