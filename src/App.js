import "./App.css";
import EnterSub from "./components/EnterSub";
import SubLists from "./components/SubLists";
import React, { useState, useEffect} from "react";

function App() {
  const [subList, setSubList] = useState([]);

  const addItemHandler = (newItem) => {
    //console.log(newItem);
    setSubList((prevList) => [...prevList, newItem]);
    
  };
  //Checking for state changes and ensuring that all is working in order
  useEffect(() => {
    console.log(subList);
  }, [subList]);
  return (
    <div className="App">
      <h1>Subscription List</h1>
      <EnterSub
        subList={subList}
        setSubList={setSubList}
        onAddItem={addItemHandler}
      />
      <SubLists />
    </div>
  );
}

export default App;
