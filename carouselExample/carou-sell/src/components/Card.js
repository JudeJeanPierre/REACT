import React from "react";

function Card(props) {
    return (
        <>
            <h1>Current Image:</h1>
            <img className="picture" src={props.images} alt="carouImage" />
        </>
    );
}

export default Card;