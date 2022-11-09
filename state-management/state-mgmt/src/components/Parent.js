// // LIFTING STATE ***********

// // IMPORT REACT
// import React, { useState } from "react";

// // ADDITIONAL IMPORTS
// import ReceiverChild from "./ReceiverChild";
// import SenderChild from "./SenderChild";

// // CREATE COMPONENT
// const Parent = () => {
//   // Create local state
//   const [state, setState] = useState("Hello");
//   // Create a function to update state
//   const updateState = (data) => {
//     return setState(data);
//   };
//   return (
//     <>
//       <ReceiverChild value={state} />
//       <SenderChild update={updateState} />
//     </>
//   );
// };

// // EXPORT COMPONENT
// export default Parent;




// PROP DRILLING *************************************************

// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import Child from "./Child.js";

// CREATE COMPONENT
const Parent = () => {
  return (
    <div>
      <Child cheese="gouda" />
    </div>
  );
};

// EXPORT COMPONENT
export default Parent;