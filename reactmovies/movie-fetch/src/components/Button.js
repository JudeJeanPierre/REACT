import React from 'react'

function addButton(props) {
    return (
        <div>
            <button onClick={props.cartChange}>Add Movie Wishlist</button>
        </div>
    )
}

export default addButton