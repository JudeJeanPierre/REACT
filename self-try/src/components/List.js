import React from "react";

function List(props) {
    return (
        <>
            <h1>Current SE Per Scholas' Student:</h1>
            <div className="student"><h2>{props.students}</h2></div>

        </>
    );
}

export default List;