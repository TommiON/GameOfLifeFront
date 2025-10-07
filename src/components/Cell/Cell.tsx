import { useState } from 'react'
import './Cell.css'

export const Cell = ({alive, checkable}: {alive: boolean, checkable: boolean}) => {
    const [isAlive, setIsAlive] = useState(alive);
    
    const toggleCell = () => {
        if (checkable) {
            setIsAlive(!isAlive);
        }
    };

    return (
        <div onClick={toggleCell} className={`cell ${isAlive ? 'alive' : 'dead'}`} />
    )
}