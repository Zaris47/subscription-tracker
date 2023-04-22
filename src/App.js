import "./App.css";
import EnterSub from "./components/EnterSub";
import Sublists from "./components/Sublists";

function App() {

  const addItemHandler = (props) => {
    console.log(props);
  }
  return (
    <div className="App">
      <h1>Subscription List</h1>
      <EnterSub onAddItem={addItemHandler}/>
   
    </div>
  );
}

export default App;
