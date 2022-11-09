import React from 'react'

function addButton(props) {
    return (
        <div>
            <button onClick={props.favChange}>Add to Favorite</button>
        </div>
    )
}

export default addButton;