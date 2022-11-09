// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS

// CREATE COMPONENT
const SenderChild = ({ update }) => {
  return (
    <>
      <button
        onClick={() => {
          return update('GoodBye');
        }}
      >
        Click Me
      </button>
    </>
  );
};

// EXPORT COMPONENT
export default SenderChild;