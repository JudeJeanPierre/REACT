import React from 'react';

function Cart(props) {

    return (
        <>
            <button onClick={props.addMovie}> Add to Watchlist</button>

            <div>
                {props.list.map((movie, i) => {
                    return <div key={i}>
                        {movie.Title}
                        <button onClick={props.deleteMovie} title={movie.Title}>Remove</button>
                    </div>
                }
                )}
            </div>
        </>
    )
}

export default Cart