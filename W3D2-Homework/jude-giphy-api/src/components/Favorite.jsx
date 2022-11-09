import React from 'react';

function Favorite(props) {

    return (
        <>
            <button onClick={props.addGif}> Add to Favorite</button>

            <div>
                {props.list.map((gif, i) => {
                    return <div key={i}>
                        {gif.title}
                        <button onClick={props.deleteGif} title={gif.title}>Remove</button>
                    </div>
                }
                )}
            </div>
        </>
    )
}

export default Favorite