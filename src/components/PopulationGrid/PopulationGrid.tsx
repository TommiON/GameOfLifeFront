import { Cell } from "../Cell/Cell";
import "./PopulationGrid.css";

export const PopulationGrid = ({numberOfRows, numberOfColumns, cells}: {numberOfRows: number, numberOfColumns: number, cells: boolean[] | null}) => {
    const gridCells = [];
    
    for (let i = 0; i < numberOfRows * numberOfColumns; i++) {
        gridCells.push(
            <Cell key={i} alive={false} checkable={true} />            
        );
    }

    return (
        <div
            className="population-grid"
            style={{
                display: "grid",
                gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
                gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
                gap: "0px",
            }}
        >
            {gridCells}
        </div>
    )
}