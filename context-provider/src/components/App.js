// IMPORT REACT
import React from "react";
// ADDITIONAL IMPORTS
import Parent from "./Parent";
import CheeseContext from "../contexts/CheeseContext";
// CREATE COMPONENT
const App = () => {
  return (
    <CheeseContext.Provider value={"cheese cheese"}>
      <Parent />
    </CheeseContext.Provider>
  );
};
// EXPORT COMPONENT
export default App;