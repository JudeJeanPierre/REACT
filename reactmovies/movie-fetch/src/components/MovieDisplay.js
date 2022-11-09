// import React from "react";

// function MovieDisplay({ movie }) {
//     const loaded = () => {
//         return (
//             <>
//             <div movieContainer>
//                 <h1 className="title">{movie.Title}</h1><hr/>
//                 <h2 className="genre">{movie.Genre}</h2>
//                 <img className="pic" src={movie.Poster} alt={movie.Title} />
//                 <h2 className="year">{movie.Year}</h2>
//                 </div>
//             </>
//         );
//     };
//     const loading = () => {
//         return <h1>No Movie To Display</h1>
//     }
//     return movie ? loaded() : loading()
// }

// export default MovieDisplay;

import React from "react";

function MovieDisplay({ movie }) {

    const loaded = () => {

        return (
            <>
                <div className="container">
                    <h1 className="title">{movie.Title}</h1>
                    <h2 className="year">{movie.Year}</h2>
                    <h2 className="reviews">Rated : {movie.Rated}</h2>
                    <h2 className="genre">{movie.Genre}</h2>
                </div>

                <div className="scrn">

                    <img className="poster" src={movie.Poster} alt={movie.Title} />
                    <h3 className="synopsis">{movie.Plot} </h3>

                </div>
                <h1 style={{ color: "green" }}>{movie.Actors}</h1>

                <h2 style={{ color: "orange" }}>Sold: {movie.BoxOffice}</h2>
                {/* <div>
                <button onClick={() => onAdd(movie)}>Add Movie to Wishlist</button>
            </div> */}
            </>
        );
    }

    const loading = () => {
        return "Movie Not available"
    }


    return movie ? loaded() : loading()

}

export default MovieDisplay;