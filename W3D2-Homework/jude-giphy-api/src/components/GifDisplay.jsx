import React from "react";

function GifDisplay({ gif }) {
    const loaded = () => {
        return (
            <>
            <div className="mainContainer">
            {gif.data.map((gif, i) =>(
                <div key = {i} className="imgContainer">
                    {gif.images.original.url ? (
                        <img src={`${gif.images.original.url}`} alt ="gifs" width="200px" height="200px" className = "giphies" />
                    ) : ("Nothing to show")}
                </div>
            ))}
            
                </div>
                </>
        );
    };
    const loading = () => {
        return <h1>No Displayed images</h1>
    }
    return gif ? loaded() : loading()
}

export default GifDisplay;