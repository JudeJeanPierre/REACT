// import React from "react";
// import ReceiptForm from "./components/ReceiptForm";



// export default class ReceiptNew extends React.Component {
//     state = {
//         receipts: [],
//         receiptToShow: "all",
//         toggleAllComplete: true
//     };

//     addReceipt = receipt => {
//         this.setState(state => ({
//             receipts: [receipt, ...state.receipts]
//         }));
//     };

//     toggleComplete = id => {
//         this.setState(state => ({
//             receipts: state.receipts.map(receipt => {
//                 if (receipt.id === id) {
//                     // suppose to update
//                     return {
//                         ...receipt,
//                         complete: !receipt.complete
//                     };
//                 } else {
//                     return receipt;
//                 }
//             })
//         }));
//     };

//     updateReceiptToShow = s => {
//         this.setState({
//             receiptToShow: s
//         });
//     };

//     handleDeleteReceipt = id => {
//         this.setState(state => ({
//             receipts: state.receipts.filter(receipt => receipt.id !== id)
//         }));
//     };

//     removeAllReceiptsThatAreComplete = () => {
//         this.setState(state => ({
//             receipts: state.receipts.filter(receipt => !receipt.complete)
//         }));
//     };

//     render() {
//         let receipts = [];

//         if (this.state.receiptToShow === "all") {
//             receipts = this.state.receipts;
//         } else if (this.state.receiptToShow === "active") {
//             receipts = this.state.receipts.filter(receipt => !receipt.complete);
//         } else if (this.state.receiptToShow === "complete") {
//             receipts = this.state.receipts.filter(receipt => receipt.complete);
//         }

//         return (
//             <div>
//                 <receiptForm onSubmit={this.addReceipt} />
//                 {receipts.map(receipt => (
//                     <receipt
//                         key={receipt.id}
//                         toggleComplete={() => this.toggleComplete(receipt.id)}
//                         onDelete={() => this.handleDeleteReceipt(receipt.id)}
//                         receipt={receipt}
//                     />
//                 ))}
//                 <div>
//                     receipts left: {this.state.receipts.filter(receipt => !receipt.complete).length}
//                 </div>
//                 <div>
//                     <button onClick={() => this.updateReceiptToShow("all")}>all</button>
//                     <button onClick={() => this.updateReceiptToShow("active")}>
//                         active
//                     </button>
//                     <button onClick={() => this.updateReceiptToShow("complete")}>
//                         complete
//                     </button>
//                 </div>
//                 {this.state.receipts.some(receipt => receipt.complete) ? (
//                     <div>
//                         <button onClick={this.removeAllReceiptsThatAreComplete}>
//                             remove all complete receipts
//                         </button>
//                     </div>
//                 ) : null}
//                 <div>
//                     <button
//                         onClick={() =>
//                             this.setState(state => ({
//                                 receipts: state.receipts.map(receipt => ({
//                                     ...receipt,
//                                     complete: state.toggleAllComplete
//                                 })),
//                                 toggleAllComplete: !state.toggleAllComplete
//                             }))
//                         }
//                     >
//                         toggle all complete: {`${this.state.toggleAllComplete}`}
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }