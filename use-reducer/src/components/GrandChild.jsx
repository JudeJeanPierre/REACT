import React, { useContext } from "react";
import CounterContext from '../contexts/CounterContext';
const GrandChild = () => {
    // Consume context
    const context = useContext(CounterContext);
    console.log(context);
    return (
        <div style={{ marginLeft: "30px", marginTop: "30px" }}>
            <h1>Grand Child</h1>
            <h2>{context.state}</h2>
            <span>
                <button
                    onClick={() => {
                        return context.dispatch({ type: "SUBTRACT" });
                    }}
                >
                    Subtract
                </button>{""}
                <button
                    onClick={() => {
                        return context.dispatch({ type: "ADD" });
                    }}
                >
                    Add
                </button>
            </span >
        </div >
    );
};
export default GrandChild;