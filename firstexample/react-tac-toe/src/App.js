// import logo from './logo.svg';

import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import './style.css'
function App() {
    return (
        <div className="container">
            <Header />
            <div className="flexer">
                <Player whichPlayer='X' />

                <Player whichPlayer='O' />
            </div>

            <Board />
        </div>
    );
}
// header
// player
// board
export default App;


// import Header from "./components/Header";
// import Player from "./components/Player";
// import './App.css';
// function App() {
// //   return (<h1> React Tac Toe </h1>);
// return (
//     <div className="app">
//       <Header />
//       <Player />
//       <Player />
//     </div>
// );
// }

// export default App;