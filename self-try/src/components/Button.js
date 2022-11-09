import React from 'react'

function Button(props) {
    return (
        <>
            <button onClick={props.changeName}>{props.symbols}</button>
        </>
    )
}

export default Button;