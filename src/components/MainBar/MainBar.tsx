import "./MainBar.css";

export const MainBar = ({initializationDone}: {initializationDone: boolean}) => {

    return(
        <div className="main-bar">
            {initializationDone ? "xxx" : "yyy"}
        </div>
    )
     
}