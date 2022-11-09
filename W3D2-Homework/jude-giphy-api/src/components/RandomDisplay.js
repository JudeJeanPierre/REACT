import React from "react";

function RandomDisplay({ giphy }) {
    const loaded = () => {

        return (
            <div className="gifContainer">
                <img src={`${giphy}`} alt="all giphy" width="200px" height="200px" className="img" />
            </div>
        );
    };
    const loading = () => {
        return <h1>Nothing To Display</h1>
    }
    return giphy ? loaded() : loading()
}

export default RandomDisplay;