

import { useState } from "react";
import Button from "./components/Button";
import List from "./components/List";
import "./styles.css";
import studentNames from "./models/studentName";
import symbols from "./models/symbols";

function App() {
  const [count, setCount] = useState(0);

  const [currentName, setcurrentName] = useState(studentNames[count])
  console.log(currentName)

  const reverseCount = () => {
    console.log('Descendant!')
    setCount(count - 1);
    setcurrentName(studentNames[count])
  };
  const changeCount = () => {
    console.log('Ascendant!')
    setCount(count + 1);
    setcurrentName(studentNames[count])
  };



  return (
    <div className="App">
      <List currentCount={count} students={studentNames[count]} />
      <hr />
      <Button changeName={reverseCount} symbols={symbols.left} />

      <Button changeName={changeCount} symbols={symbols.right} />
    </div>
  );
}

export default App;
