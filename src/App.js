import "./App.css";
import EnterSub from "./components/EnterSub";
import SubLists from "./components/SubLists";

function App() {

  const addItemHandler = (props) => {
    console.log(props);
  }
  return (
    <div className="App">
      <h1>Subscription List</h1>
      <EnterSub onAddItem={addItemHandler}/>
      <SubLists />
   
    </div>
  );
}

export default App;
