import React from 'react';
import Square from './Square';
import '../index.css';

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderSquares() {
        let squares = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let ind = i * 3 + j;
                squares.push(this.renderSquare(ind));
            }
        }
        return squares;
    }

    render() {
        return <div className="board">{this.renderSquares()}</div>;
    }
}

export default Board;
