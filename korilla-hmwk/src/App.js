import "./App.css";
import Receipt from "./components/Receipt";
import allReceipts from "./models/receipt";
// import ReceiptNew from "./components/ReceiptNew";
import "./korilla.css";
import { render } from "@testing-library/react";

function App() {
  const state = {
    receipt1: allReceipts[0],
    receipt2: allReceipts[1],
    receipt3: allReceipts[2],
  };
  return (
    <div className="App">
      <h1>Korrilla Jud'Haiti Receipt</h1>
      <hr />

      <div className="main">
        <Receipt receipt={state.receipt1} />
        <Receipt receipt={state.receipt2} />
        <Receipt receipt={state.receipt3} />
      </div>
    </div>
  );
  }


//   function ReceiptNew(){
//     const state1 = {
//       count: 0
//     };
  
//     increment = () => {
//       this.setState1({
//         count: this.state1.count + 1
//       });
//     };
  
//     decrement = () => {
//       this.setState1({
//         count: this.state1.count - 1
//       });
//     };
  
//     render(){
//       return (
//         <div className="App">
//           <ReceiptNew />
//         </div>
//       );
//     }

// }

export default App;
