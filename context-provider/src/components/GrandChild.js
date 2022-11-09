import React, { useContext } from "react";
import CheeseContext from '../contexts/CheeseContext';
const GrandChild = () => {
    // Create a context
    const context = useContext(CheeseContext);
    return (
        <div>
            <h1>{context}</h1>
        </div>
    );
};
export default GrandChild;