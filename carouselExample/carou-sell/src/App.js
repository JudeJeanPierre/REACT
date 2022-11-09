
import React, { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "./styles.css";
import cardImages from "./models/cardImage";
import symbols from "./models/symbols";

function App() {
  const [count, setCount] = useState(0);

  const [currentPic,setCurrentPic] = useState(cardImages[count])
  console.log(currentPic)

  const reverseCount = () => {
    console.log('Descendant!')
    setCount(count -1);
    setCurrentPic(cardImages[count])
  };
  const changeCount = () => {
    console.log('Ascendant!')
    setCount(count +1);
    setCurrentPic(cardImages[count])
  };

 

  return (
    <div className="App">
      <Card currentCount={count} images={cardImages[count]} />
      <hr />
      <Button  changePic={reverseCount} symbols={symbols.left} />

      <Button  changePic={changeCount} symbols={symbols.right} />
    </div>
  );
}

export default App;