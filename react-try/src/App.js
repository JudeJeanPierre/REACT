
// function App(){
//     return(
//     <>
//     <h1>REACT's in the building</h1>
//     </>
//     );
// }

// export default App;

// const Person = (props) => {
//     return (
//         <>
//             <h1>First Name: {props.name}</h1>
//             <h2>Last Name: {props.lastName}</h2>
//             <h2>Age: {props.age} yrs old</h2> <br/>

//         </>
//     )
// }


// const App = () => {
//     return (

//         <div className="App">
//             <Person
//                 name={'Jude'}
//                 lastName={'Jean Pierre'}
//                 age={'30'}
//             />
//             <Person
//                 name={'Jean Patrick'}
//                 lastName={'Staco'}
//                 age={'35'}
//             />
//             <Person
//                 name={'Amos'}
//                 lastName={'Souffrant'}
//                 age={'40'}
//             />
//             <Person
//                 name={'Kyia'}
//                 lastName={'Freeman'}
//                 age={'27'}
//             />
//         </div>
//     )
// }




// export default App;




// import React, { useState } from "react";
// import './style.css';

// const App = () => {
//     const [counter, setCounter] = useState(0);

//     return (

//         <div className="App">
//             <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
//             <h1>{counter}</h1>
//             <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>


//         </div>
//     )
// }




// export default App;




import React, { useState, useEffect } from "react";
import './style.css';

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        setCounter(100)
    }, []);

    return (

        <div className="App">
            <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>


        </div>
    )
}

export default App;