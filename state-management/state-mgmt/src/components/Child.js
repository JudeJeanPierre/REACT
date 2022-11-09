// IMPORT REACT
import React from "react";

// ADDITIONAL IMPORTS
import GrandChild from "./GrandChild";

// CREATE COMPONENT
const Child = ({ cheese }) => {
  return (
    <div>
      <GrandChild data={cheese} />
    </div>
  );
};

// EXPORT COMPONENT
export default Child;