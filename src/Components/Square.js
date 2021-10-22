import React from 'react'

const Square = ({ value, onClick, isWinningSquare }) => {
    return (
        <button
            type="button"
            className="square"
            style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
            onClick={onClick}

        >
            {value}
        </button>
    );

}

export default Square
