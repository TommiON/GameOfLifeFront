import { useState } from 'react'
import './Cell.css'

export const Cell = () => {
    const [isAlive, setIsAlive] = useState(false);
    const [isCheckable, setIsCheckable] = useState(true);

    const toggleCell = () => {
        if (isCheckable) {
            setIsAlive(!isAlive);
        }
    };

    return (
        <div onClick={toggleCell} className={`cell ${isAlive ? 'alive' : 'dead'}`} />
    )
}