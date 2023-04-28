import "./App.css";
import EnterSub from "./components/EnterSub";
import SubLists from "./components/SubLists";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";


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
      <Typography variant="h2" className="title">Subscription List</Typography>
      <EnterSub 
        subList={subList}
        setSubList={setSubList}
        onAddItem={addItemHandler}
      />
      <SubLists subList={subList} setSubList={setSubList} />
    </div>
  );
}

export default App;
